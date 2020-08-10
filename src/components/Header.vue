<template>
  <transition 
    :css="false"
    @enter="enter"
  >
    <div 
      v-if="loaded"

      class="header"

      :style="styleObject"
      style="transform: scale(0)"
    >
      <h1 class="title">
        Daniel Shields
      </h1>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

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
  name: 'Header',

  props: {
    color: {
      type: String,
      default: '#000000'
    }
  },

  setup(props) {
    let loaded = ref(false);
    let styleObject = ref({
      textColor: props.color
    });

    const tile = ref(null);

    onMounted(() => loaded.value = true);

    return {
      tile,
      lightenDarkenColor,
      loaded,
      styleObject
    };
  },

  methods: {
    enter(el: HTMLElement, done: AnimeCallbackFunction) {
      anime({
        targets: el,
        opacity: 1,
        delay: 250,
        duration: 1000,
        easing: 'easeOutQuart'
      });
      anime({
        targets: el,
        scale: 1,
        delay: 250,
        duration: 1500,
        easing: 'easeOutElastic(1, 0.5)',
        complete: done,
      });
    }     
  }
});
</script>

<style lang="scss" scoped>
$height: 100px;

.header {
  height: $height;
  border-radius: 10px;
  opacity: 0;

  max-width: 100%;
  min-width: 240px;

  margin: auto;
  line-height: $height;
  vertical-align: middle;
  width: 100%;

  .title {
    margin: 0;
  }
}
</style>
