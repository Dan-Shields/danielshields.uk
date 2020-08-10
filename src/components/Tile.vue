<template>
  <div
    ref="tile"
    class="tile"

    :style="widthStyle"
    style="transform: scale(0)"

    :class="{ selected }"
    
    @mouseover="updateHover(true)"
    @mouseout="updateHover(false)"

    @click="select"
  >
    <div 
      class="box"
      :style="backgroundStyle"
    >
      <h1 class="title">
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

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
      default: '<tile_title>'
    },
    index: {
      type: Number,
      default: -1
    }
  },

  setup(props) {
    let backgroundStyle = ref({
      background: [
        'linear-gradient(to bottom right, ' + props.color + ', ' + lightenDarkenColor(props.color, 50) + ')'
      ],
    });
    let widthStyle = ref({
      width: props.width      
    });

    const tile = ref<HTMLElement | null>(null);
    const selected = ref(false);
    const hover = ref(false);

    const updateHover = function (value: boolean) {
      if (!selected.value) {
        hover.value = value;
      }
    };

    watch(hover, newVal => {
      console.log(newVal);
      if (newVal) {
        anime({
          targets: tile.value,
          scale: 1.1,
          duration: 500,
          easing: 'easeOutElastic(1, 0.7)'
        });
      } else {
        anime({
          targets: tile.value,
          scale: 1,
          duration: 500,
          easing: 'easeOutElastic(1, 0.7)'
        });
      }
    });

    const select = function () {
      if (!selected.value) {
        selected.value = true;

        anime({
          targets: tile.value,
          scale: 40,
          duration: 600,
          easing: 'easeInExpo'
        });
      }
    };

    return {
      tile,
      lightenDarkenColor,
      backgroundStyle,
      widthStyle,
      hover,
      selected,
      updateHover,
      select
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
    }
  }

  .box {
    height: 100%;
    width: calc(100% - #{$margin});
    border-radius: 10px;

    margin: 0 calc(#{$margin} / 2);

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .title {
      color: white;
      vertical-align: middle;
      margin: 0;
      user-select: none;
      cursor: pointer;

      transition: opacity 0.1s ease-in-out;
    }
  }
}
</style>
