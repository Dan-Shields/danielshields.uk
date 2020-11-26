<template>
  <div 
    class="header"
  >
    <h1 
      ref="titleDiv"
      class="title"
    >
      {{ title }}
    </h1>

    <div 
      ref="navbar"
      class="navbar"
    >
      <h1
        v-for="(page, index) in pages"
        :key="page"
        :class="{active: index === currentPage}"
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
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },

  emits: ['go-to-page'],

  setup() {
    const titleDiv = ref(null);
    const navbar = ref(null);

    onMounted(() => {
      anime({
        targets: [titleDiv.value, navbar.value],
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
        delay: anime.stagger(1250, { start: 250 }),
      });
    });

    return {
      titleDiv,
      navbar
    };
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

    > * {
      //flex-basis: 33%;
    }

    h1 {
      user-select: none;
      cursor: pointer;

      &.active {
        text-decoration: underline;
      }
    }
  }
}
</style>
