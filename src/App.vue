<template>
  <div
    class="body"
  >
    <Header
      :pages="pages.map(page => page.name)"
      :current-page="currentPage"
      @go-to-page="goToPage"
    />

    <template 
      v-for="(page, index) in pages"
      :key="index"
    >
      <div 
        :id="page.name.toLowerCase()"

        :ref="el => { if (el) pageDivs[index] = el }"
        
        class="page"
        :class="{ 
          right: index == 2,
          left: index == 0
        }"
      >
        <Tile
          v-for="(tile, tileIndex) in page.tiles"
          :key="tileIndex"
          :width="tile.width"
          :color="tile.colour"
          :title="tile.title"
          :index="tileIndex"
          :page-index="index"
          :link="tile.link"
          :page-name="page.name"
          :image-url="tile.image || ''"
          @selected="showContent"
        />

        <transition name="fade">
          <div
            v-if="page.selectedTile != -1"
            class="tile-content"
          >
            <div
              class="back"
              :class="{ invert: page.tiles[page.selectedTile].invertColours }"
              @click="hideContent"
            >
              <img :src="arrows[page.tiles[page.selectedTile].invertColours ? 'inverted' : 'normal']">
              BACK
            </div>
          </div>
        </transition>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import anime from 'animejs';

import TileComponent from './components/Tile.vue';
import Header from './components/Header.vue';

import tileImages from './assets/tile-images';
import normalArrow from './assets/arrow.svg';
import invertedArrow from './assets/arrow-inverted.svg';

import { defineComponent, ref, reactive, onMounted, onBeforeUpdate, getCurrentInstance } from 'vue';

interface Tile {
  title: string,
  image?: string,
  colour: string,
  width: string,
  link?: string,
  invertColours?: boolean
}

interface Page {
  name: string,
  tiles: Tile[],
  selectedTile: number
}

export default defineComponent({
  name: 'App',
  components: {
    Tile: TileComponent,
    Header
  },

  setup() {
    
    // Information for each page
    const pages = reactive<Page[]>([
      {
        name: 'Experience',
        tiles: [
          { title: '', image: tileImages.faceit, colour: '#FF5500', width: '60%' },
          { title: 'NodeCG Packages', image: tileImages.nodecg, colour: '#03615f', width: '40%' },
          { title: 'Essentials.TF', image: tileImages.essentialstf, colour: '#E5E5E5', width: '40%', invertColours: true },
          { title: '', image: tileImages.uomesports, colour: '#2E1745', width: '60%' },
          { title: '', image: tileImages.hiveaid, colour: '#3A3A3C', width: '50%' },
          { title: '', image: tileImages.kotn, colour: '#120216', width: '50%' }
        ],
        selectedTile: -1
      },
      {
        name: 'Services',
        tiles: [
          { title: 'Broadcast Graphics Development', colour: '#4643ff', width: '50%' },
          { title: 'Backend Web Development', colour: '#52A316', width: '50%' },
          { title: 'Stream Production', colour: '#eb4034', width: '50%' },
          { title: 'Esports Event Management', colour: '#F3B218', width: '50%' },
        ],
        selectedTile: -1
      },
      {
        name: 'Contact',
        tiles: [
          { title: 'LinkedIn', image: tileImages.linkedin, colour: '#2867B2', width: '50%', link: 'https://www.linkedin.com/in/dan98/' },
          { title: 'GitHub', image: tileImages.github, colour: '#24292e', width: '50%', link: 'https://github.com/Dan-Shields' },
          { title: 'Twitter', image: tileImages.twitter, colour: '#1DA1F2', width: '50%', link: 'https://twitter.com/DanShieldsUK' },
          { title: 'Email', image: tileImages.at, colour: '#D289F8', width: '50%', link: 'mailto:hello@danielshields.uk' }
        ],
        selectedTile: -1
      }
    ]);

    const pageDivs = ref<HTMLElement[]>([]);

    const currentPage = ref(1);

    const goToPage = function (page: number) {
      if (page == currentPage.value){
        return;
      }

      // Move for longer if we're moving by 2 pages at once
      const transitionDuration = Math.abs(currentPage.value - page) > 1 ? '1.5s' : '1s';

      pageDivs.value.forEach(pageDiv => {
        pageDiv.style.transitionDuration = transitionDuration;
      });

      // Spin selected page to center
      pageDivs.value[page].style.transform = 'rotate(0deg)';

      const rotation = 100;
      
      // Spin other pages off-screen
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

    const showContent = function (page: number, tile: number) {
      pages[page].selectedTile = tile;
    };

    const instance = getCurrentInstance();
    const hideContent = function () {
      if (pages[currentPage.value].selectedTile == -1) return;

      if (instance) {
        instance.appContext.config.globalProperties.emitter.emit('hide-tile', {page: currentPage.value, tile: pages[currentPage.value].selectedTile});
      }

      pages[currentPage.value].selectedTile = -1;

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
      pages,
      pageDivs,
      goToPage,
      currentPage,
      showContent,
      hideContent,
      arrows: {
        normal: normalArrow,
        inverted: invertedArrow
      }
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

  .tile-content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;

    transition: opacity 0.25s linear;

    .back {
      height: 50px;
      width: 20%;
      min-width: 80px;
      max-width: 100%;

      //background-color:red;
      margin: auto;
      color: white;

      padding-top: 20px;

      cursor: pointer;

      font-size: 24px;

      &.invert {
        color: black;
      }

      img {
        max-height: 50%;
        width: auto;
        display: inline-block;
      }
    }
  }
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>