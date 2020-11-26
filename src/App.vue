<template>
  <div
    class="body"
  >
    <Header
      :pages="pages.map(page => page.name)"
      @go-to-page="goToPage"
    />

    <template v-for="(page, index) in pages">
      <div 
        :id="page.name.toLowerCase()"
        :key="page.id"

        :ref="el => { if (el) pageDivs[index] = el }"
        
        class="page"
        :class="{ 
          right: index == 2,
          left: index == 0
        }"
      >
        <Tile
          v-for="(tile, tileIndex) in page.tiles"
          :key="tile.id"
          :width="tile.width"
          :color="tile.colour"
          :title="tile.title"
          :index="tileIndex"
          :link="tile.link"
          :url="tile.url"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import anime from 'animejs';

import Tile from './components/Tile.vue';
import Header from './components/Header.vue';

import { defineComponent, ref, reactive, onMounted, onBeforeUpdate } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    Tile,
    Header
  },

  setup() {

    const mod = function(a: number, b: number) {
      return ((a%b)+b)%b;
    };

    const pages = reactive([
      {
        name: 'Projects',
        tiles: [
          {id: '1', title: 'Web Development', colour: '#4643ff', width: '60%'},
          {id: '2', title: 'Broadcast Graphics', colour: '#8e44ad', width: '40%'},
          {id: '3', title: 'GitHub', colour: '#24292e', width: '40%'},
          {id: '4', title: '_title_here_', colour: '#52A316', width: '60%'},
          {id: '5', title: '_title_here_', colour: '#F3B218', width: '60%'},
          {id: '6', title: '_title_here_', colour: '#D46326', width: '40%'}
        ]
      },
      {
        name: 'Services',
        tiles: [
          {id: '1', title: 'Web Development', colour: '#4643ff', width: '60%'},
          {id: '2', title: 'Broadcast Graphics', colour: '#8e44ad', width: '40%'},
          {id: '3', title: 'GitHub', colour: '#119aa4', width: '40%'},
          {id: '4', title: '_title_here_', colour: '#52A316', width: '60%'},
          {id: '5', title: '_title_here_', colour: '#F3B218', width: '60%'},
          {id: '6', title: '_title_here_', colour: '#D46326', width: '40%'}
        ]
      },
      {
        name: 'Contact',
        tiles: [
          { id: '1', title: 'LinkedIn', colour: '#2867B2', width: '50%', link: true, url: 'https://www.linkedin.com/in/dan98/' },
          { id: '3', title: 'GitHub', colour: '#24292e', width: '50%', link: true, url: 'https://github.com/Dan-Shields' },
          { id: '4', title: 'Twitter', colour: '#1DA1F2', width: '50%', link: true, url: 'https://twitter.com/DanShieldsUK' },
          { id: '5', title: 'YouTube', colour: '#FF0000', width: '50%', link: true, url: 'https://www.youtube.com/channel/UCRw7uiTK46-r1sdL-gAXaSg' },
          { id: '2', title: 'Email', colour: '#44AD5A', width: '100%', link: true, url: 'mailto:hello@danielshields.uk' }
        ]
      }
    ]);

    const pageDivs = ref<HTMLElement[]>([]);

    const currentPage = ref(1);
    const pageCount = pages.length;

    const goToPage = function (page: number) {
      if (page == currentPage.value){
        return;
      }

      const transitionDuration = Math.abs(currentPage.value - page) > 1 ? '1.5s' : '1s';

      pageDivs.value.forEach(pageDiv => {
        pageDiv.style.transitionDuration = transitionDuration;
      });

      pageDivs.value[page].style.transform = 'rotate(0deg)';

      const rotation = 100;
      
      if (currentPage.value < page) {
        // Spinning clockwise

        if (page == 2) {
          // Moving to far right
          pageDivs.value[0].style.transform = 'rotate(' + (rotation * 2) + 'deg)';
          pageDivs.value[1].style.transform = 'rotate(' + (rotation) + 'deg)';
        } else {
          // Moving to middle
          pageDivs.value[0].style.transform = 'rotate(' + (rotation) + 'deg)';
          pageDivs.value[2].style.transform = 'rotate(-' + (rotation) + 'deg)';
        }
      } else {
        // Spinning anticlockwise

        if (page == 0) {
          // Moving to far left
          pageDivs.value[1].style['transform'] = 'rotate(-' + (rotation) + 'deg)';
          pageDivs.value[2].style['transform'] = 'rotate(-' + (rotation * 2) + 'deg)';
        } else {
          // Moving to middle
          pageDivs.value[0].style['transform'] = 'rotate(' + (rotation) + 'deg)';
          pageDivs.value[2].style['transform'] = 'rotate(-' + (rotation) + 'deg)';
        }
      }

      history.replaceState(null, '', `#${pages[page].name.toLowerCase()}`);

      currentPage.value = page;
    };

    onBeforeUpdate(() => {
      pageDivs.value = [];
    });

    onMounted(() => {
      console.log(window.location.hash);

      switch (window.location.hash) {
        case `#${pages[0].name.toLowerCase()}`:
          goToPage(0);
          break;

        case `#${pages[2].name.toLowerCase()}`:
          goToPage(2);
          break;
      }

      // Animate all tiles in
      anime({
        targets: '.tile',
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
        delay: anime.stagger(50, { start: 1250 })
      });
    });

    return {
      mod,
      pageDivs,
      goToPage,
      pageCount,
      pages,
      currentPage
    };
  },

});
</script>

<style lang="scss" scoped>
$width: min(640px, 100%);
$margin: min(30px, 3vw);

.body {
  position: absolute;
  width: $width;

  max-height: 100%;
  min-height: 90%;

  left: calc(50vw - (#{$width} / 2));

  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  text-align: center;
}

.page {
  position: absolute;
  width: calc(100% - #{$margin});

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: calc(#{$margin} / 2);
  padding-bottom: 0;
  padding-top: $margin;

  opacity: 1;

  transform: rotate(0deg);

  overflow: hidden;
  border-radius: 20px;

  transform-origin: center -420px;

  transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);

  &.right {
    transform: rotate(-120deg);
  }

  &.left {
    transform: rotate(120deg);
  }
}
</style>