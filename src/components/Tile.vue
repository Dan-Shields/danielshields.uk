<template>
  <div
    ref="tile"
    class="tile"

    :style="widthStyle"

    :class="{ selected }"

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
        v-if="imageUrl"
        class="image"
        :src="imageUrl"
      >

      <h1
        v-else
        class="title"
      >
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, getCurrentInstance } from 'vue';

import anime from 'animejs';

const lightenDarkenColor = function (col: string, amt: number) {
  var usePound = false;

  if (col[0] == '#') {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col,16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound?'#':'') + (g | (b << 8) | (r << 16)).toString(16);
};

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
    title: {
      type: String,
      default: ''
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
      default: ''
    },
    pageName: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    }
  },

  emits: ['selected'],

  setup(props, {emit}) {
    let backgroundStyle = ref({
      background: 'linear-gradient(to bottom right, ' + props.color + ', ' + lightenDarkenColor(props.color, 50) + ')'
    });
    
    let widthStyle = ref({
      width: props.width      
    });

    const tile = ref<HTMLElement | null>(null);
    const selected = ref(false);
    const hover = ref(false);

    const updateHover = function (value: boolean) {
      if (!window.isTouchEnabled && !selected.value) {
        hover.value = value;
      }
    };

    watch(hover, newHover => {
      if (selected.value)
        return;
      
      anime({
        targets: box.value,
        scale: newHover ? 1.1 : 1,
        duration: 500,
        easing: 'easeOutElastic(1, 0.7)'
      });
    });

    const box = ref<HTMLElement | null>(null);

    const select = function () {
      if (props.link) {
        window.open(props.link);

        return;
      }

      if (selected.value)
        return;

      selected.value = true;

      anime.remove(box.value);
      anime.set(box.value, {
        opacity: 1,
        scale: window.isTouchEnabled ? 1 : 1.1
      });

      anime({
        targets: box.value,
        scale: 6,
        duration: 600,
        easing: 'easeInExpo',
        complete: () => {
          emit('selected', props.pageIndex, props.index)
        }
      });
    };

    const back = function () {
      if (!selected.value)
        return;

      anime.remove(box.value);

      anime({
        targets: box.value,
        scale: 1,
        duration: 600,
        easing: 'easeInOutExpo',
        complete: () => {
          hover.value = false;
          selected.value = false;
        }
      });
    };

    // Listen for back-button clicks
    const instance = getCurrentInstance();
    if (instance) {
      instance.appContext.config.globalProperties.emitter.on('hide-tile', (data: { page: number, tile: number }) => {
        console.log('msg received');
        if (data.page == props.pageIndex && data.tile == props.index) {
          back();
        }
      });
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
    };
  }
});
</script>

<style lang="scss" scoped>
$height: 250px;
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

    .title {
      color: white;
      vertical-align: middle;
      margin: 0;
      user-select: none;
      cursor: pointer;
      padding: 5px;
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
