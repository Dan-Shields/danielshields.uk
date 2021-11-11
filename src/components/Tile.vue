<template>
    <a
        ref="tile"
        class="tile"

        :style="widthStyle"

        :class="{ selected }"

        :href="link ?? undefined"
        :target="link ? '_blank' : undefined"

        @click="select"
    >
        <div
            ref="box"
            class="box"
            :style="backgroundStyle"

            @mouseover="updateHover(true)"
            @mouseout="updateHover(false)"
        >
            <img
                v-if="imageUrl && !fullImage"
                class="image"
                :src="imageUrl"
            >

            <h1
                v-else-if="!fullImage"
                class="title"
                :class="{ interactive }"
            >
                <slot name="title"></slot>
            </h1>
            <slot></slot>
        </div>
    </a>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import anime from 'animejs'

const lightenDarkenColor = function (col: string, amt: number) {
    var usePound = false

    if (col[0] == '#') {
        col = col.slice(1)
        usePound = true
    }

    var num = parseInt(col,16)

    var r = (num >> 16) + amt

    if (r > 255) r = 255
    else if  (r < 0) r = 0

    var b = ((num >> 8) & 0x00FF) + amt

    if (b > 255) b = 255
    else if  (b < 0) b = 0

    var g = (num & 0x0000FF) + amt

    if (g > 255) g = 255
    else if (g < 0) g = 0

    return (usePound?'#':'') + (g | (b << 8) | (r << 16)).toString(16)
}

export default defineComponent({
    name: 'Tile',

    props: {
        color: {
            type: String,
            default: '#4643ff'
        },
        width: {
            type: String,
            default: '100%'
        },
        index: {
            type: Number,
            default: -1
        },
        pageIndex: {
            type: Number,
            default: -1
        },
        link: {
            type: String,
            default: null
        },
        pageName: {
            type: String,
            default: ''
        },
        imageUrl: {
            type: String,
            default: ''
        },
        fullImage: {
            type: Boolean,
            default: false
        },
        interactive: {
            type: Boolean,
            default: true
        }
    },

    emits: ['selected'],

    setup(props, {emit}) {
        let backgroundStyle = ref({
            background: props.fullImage && props.imageUrl ? `url("${props.imageUrl}") center/cover no-repeat` : 'linear-gradient(to bottom right, ' + props.color + ', ' + lightenDarkenColor(props.color, 50) + ')',
            cursor: props.interactive ? 'pointer' : 'unset'
        })
    
        let widthStyle = ref({
            width: props.width      
        })

        const tile = ref<HTMLElement | null>(null)
        const selected = ref(false)
        const hover = ref(false)

        const updateHover = function (value: boolean) {
            if (!window.isTouchEnabled && !selected.value) {
                hover.value = value
            }
        }

        const box = ref<HTMLElement | null>(null)

        watch(hover, newHover => {
            if (selected.value || !props.interactive)
                return

            anime({
                targets: box.value,
                scale: newHover ? 1.1 : 1,
                duration: 500,
                easing: 'easeOutElastic(1, 0.7)'
            })
        })

        const select = function () {
            if (!props.interactive || props.link || selected.value) return

            selected.value = true

            anime.remove(box.value)
            anime.set(box.value, {
                opacity: 1,
                scale: window.isTouchEnabled ? 1 : 1.1
            })

            anime({
                targets: box.value,
                scale: 6,
                duration: 600,
                easing: 'easeInExpo',
                complete: () => {
                    emit('selected', props.pageIndex, props.index)
                }
            })
        }

        const back = function () {
            if (!selected.value)
                return

            anime.remove(box.value)

            anime({
                targets: box.value,
                scale: 1,
                duration: 600,
                easing: 'easeInOutExpo',
                complete: () => {
                    hover.value = false
                    selected.value = false
                }
            })
        }

        return {
            tile,
            box,
            backgroundStyle,
            widthStyle,
            selected,
            updateHover,
            select,
            back
        }
    }
})
</script>

<style lang="scss" scoped>
$height: 272px;
$margin: min(30px, 3vw);

.tile {
  max-width: 100%;
  height: $height;
  max-height: 50vw;
  opacity: 0;

  margin-bottom: $margin;

  &.selected {
    z-index: 500;

    .box {
      cursor: default !important;

      .title {
        cursor: default !important;
        opacity: 0;
      }

      .image {
        cursor: default !important;
        opacity: 0;
      }
    }
  }

  .box {
    position: absolute;

    height: 100%;
    width: calc(100% - #{$margin});
    border-radius: 10px;

    margin: 0 calc(#{$margin} / 2);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    > * {
      transition: opacity 0.25s ease-in-out;
      opacity: 1;
    }

    //box-shadow: 5px 5px 15px 0px rgba(59, 59, 59, 0.479);

    .title {
      color: white;
      vertical-align: middle;
      margin: 0;
      user-select: none;
      
      padding: 5px;
      &.interactive {
        cursor: pointer;
      }
    }

    .image {
      max-width: 80%;
      max-height: 80%;
      margin: auto;

      user-select: none;
    }
  }
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
