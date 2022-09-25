<template>
    <a
        ref="tile"
        class="tile"
        :href="link ?? undefined"
        :target="link ? '_blank' : undefined"
    >
        <div
            ref="box"
            class="box"
            :style="boxStyle"
            @mouseover="updateHover(true)"
            @mouseout="updateHover(false)"
        >
            <img v-if="imageUrl && !fullImage" class="image" :src="imageUrl" />

            <h1 v-else-if="!hideTitle" class="title" :class="{ interactive }">
                <slot name="title"></slot>
            </h1>
            <slot></slot>
        </div>
    </a>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

import anime from 'animejs'

const lightenDarkenColor = function (col: string, amt: number) {
    var usePound = false

    if (col[0] == '#') {
        col = col.slice(1)
        usePound = true
    }

    var num = parseInt(col, 16)

    var r = (num >> 16) + amt

    if (r > 255) r = 255
    else if (r < 0) r = 0

    var b = ((num >> 8) & 0x00ff) + amt

    if (b > 255) b = 255
    else if (b < 0) b = 0

    var g = (num & 0x0000ff) + amt

    if (g > 255) g = 255
    else if (g < 0) g = 0

    return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

const props = defineProps({
    color: {
        type: String,
        default: '#4643ff',
    },
    link: {
        type: String,
        default: null,
    },
    imageUrl: {
        type: String,
        default: '',
    },
    fullImage: {
        type: Boolean,
        default: false,
    },
    interactive: {
        type: Boolean,
        default: true,
    },
    hideTitle: {
        type: Boolean,
        default: false,
    },
    borderColor: {
        type: String,
        default: '',
    },
})

let boxStyle = ref({
    background:
        props.fullImage && props.imageUrl
            ? `url("${props.imageUrl}") center/cover no-repeat`
            : 'linear-gradient(to bottom right, ' +
              props.color +
              ', ' +
              lightenDarkenColor(props.color, 50) +
              ')',
    cursor: props.interactive ? 'pointer' : 'unset',
    border: props.borderColor ? `1px solid ${props.borderColor}` : '',
})

const tile = ref<HTMLElement>()
const hover = ref(false)

const updateHover = (value: boolean) => {
    // if (!window.isTouchEnabled) {
    hover.value = value
    // }
}

const box = ref<HTMLElement>()

watch(hover, (newHover) => {
    if (!props.interactive) return

    anime({
        targets: box.value,
        scale: newHover ? 1.1 : 1,
        duration: 500,
        easing: 'easeOutElastic(1, 0.7)',
    })
})
</script>

<style lang="scss" scoped>
.tile {
    width: 100%;
    max-width: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: block;

    .box {
        width: 100%;
        height: 100%;
        border-radius: 10px;

        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .title {
            color: white;
            vertical-align: middle;
            margin: 15px 0;
            user-select: none;

            padding: 5px;
            &.interactive {
                cursor: pointer;
            }
        }

        .image {
            max-width: 80%;
            max-height: 80%;
            //height: 325px;
            margin: auto;

            user-select: none;
        }
    }
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
