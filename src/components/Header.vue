<template>
  <div 
    class="header"
  >
    <h1 
      ref="title"
      class="title"
    >
      {{ title }}
    </h1>

    <div class="navbar">
      <h1
        v-for="(page, index) in pages"
        :key="page"
        @click="$emit('go-to-page', index)"
      >
        {{ page }}
      </h1>
    </div> 
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

import anime from 'animejs';

export default defineComponent({
  name: 'Header',

  props: {
    title: {
      type: String,
      default: 'Daniel Shields'
    },
    pages: {
      type: Array,
      default: () => [
        'Skills',
        'Projects',
        'Contact'
      ]
    }
  },

  emits: ['go-to-page'],

  setup() {
    const title = ref(null);
    const subtitle = ref(null);

    onMounted(() => {
      anime({
        targets: title.value,
        opacity: {
          value: 1,
          duration: 1000,
          easing: 'easeOutQuart'
        },
        scale: {
          value: 1,
          duration: 1500,
          easing: 'easeOutElastic(1, 1)'
        },
        delay: 250,
      });

      anime({
        targets: subtitle.value,
        opacity: {
          value: [0, 1],
          duration: 1000,
          easing: 'easeOutQuart'
        },
        scale: {
          value: [0, 1],
          duration: 1500,
          easing: 'easeOutElastic(1, 1)'
        },
        delay: 1250,
      });
    });
  }
});
</script>

<style lang="scss" scoped>
$height: 100px;

.header {
  height: $height;
  border-radius: 10px;

  max-width: 100%;
  min-width: 240px;

  margin: auto;
  margin-bottom: 0px;
  vertical-align: middle;
  width: 100%;

  .title {
    margin: 0;
    margin-top: 25px;
    font-size: 42px; 
  }


  .navbar {
    width: 80%;
    margin: auto;
    position: relative;

    $height: 60px;

    display: flex;
    justify-content: space-around;

    * > {
      flex-basis: 33%;
    }

    h1 {
      user-select: none;
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>
