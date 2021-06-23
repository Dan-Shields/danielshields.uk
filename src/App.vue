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
                :id="page.name.toLowerCase().replaceAll(' ', '-')"

                :ref="el => { if (el) pageDivs[index] = el }"
        
                class="page"
                :class="{ 
                    right: index == 2,
                    left: index == 0
                }"
            >
                <template v-if="page.tiled && page.tiles !== undefined">
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
                        :image-url="tile.image ?? ''"
                        :full-image="tile.fullImage ?? false"
                        :interactive="tile.interactive ?? true"
                        class="animate-in"
                    />
                </template>
                <template v-else-if="pageContents[index]">
                    <component
                        :is="pageContents[index]"
                    />
                </template>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import anime from 'animejs';

import TileComponent from './components/Tile.vue';
import Header from './components/Header.vue';

import Pages from './components/pages';

import tileImages from './assets/tile-images';
import normalArrow from './assets/arrow.svg';
import invertedArrow from './assets/arrow-inverted.svg';

import { defineComponent, ref, reactive, onMounted, onBeforeUpdate } from 'vue';

interface Tile {
    name: string,
    title: string,
    image?: string,
    fullImage?: boolean,
    colour?: string,
    width: string,
    link?: string,
    invertColours?: boolean,
    interactive?: boolean
}

interface Page {
    name: string,
    tiled: boolean
    tiles?: Tile[],
    selectedTile?: number
}

export default defineComponent({
    name: 'App',
    components: {
        Tile: TileComponent,
        Header,
        ...Pages
    },

    setup() {

        const pageDivs = ref<HTMLElement[]>([]);
        const currentPage = ref(1);
    
        // Information for each page
        const pages = reactive<Page[]>([
            {
                name: 'Broadcast Operator',
                tiled: false
            },
            {
                name: 'Contact',
                tiled: true,
                tiles: [
                    { name: '', title: 'Banner', image: tileImages.me, fullImage: true, width: '100%', interactive: false },
                    { name: '', title: 'LinkedIn', image: tileImages.linkedin, colour: '#2867B2', width: '50%', link: 'https://www.linkedin.com/in/dan98/' },
                    { name: '', title: 'GitHub', image: tileImages.github, colour: '#24292e', width: '50%', link: 'https://github.com/Dan-Shields' },
                    { name: '', title: 'Twitter', image: tileImages.twitter, colour: '#1DA1F2', width: '50%', link: 'https://twitter.com/DanShieldsUK' },
                    { name: '', title: 'Email', image: tileImages.at, colour: '#D289F8', width: '50%', link: 'mailto:hello@danielshields.uk' }
                ],
                selectedTile: -1
            },
            {
                name: 'Software Developer',
                tiled: false
            }      
        ]);

        const goToPage = function (page: number, skipAnim = false) {
            if (page == currentPage.value){
                return;
            }

            if (!skipAnim) {
                // Move for longer if we're moving by 2 pages at once
                const transitionDuration = Math.abs(currentPage.value - page) > 1 ? '1.5s' : '1s';
  
                pageDivs.value.forEach(pageDiv => {
                    pageDiv.style.transitionDuration = transitionDuration;
                });
            } else {
                pageDivs.value.forEach(pageDiv => {
                    pageDiv.style.transitionDuration = '0s';
                });
            }

            // Spin selected page to center
            pageDivs.value[page].style.transform = 'rotate(0deg)';

            const rotation = 110;
      
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

            history.replaceState(null, '', `#${pages[page].name.toLowerCase().replaceAll(' ', '-')}`);

            currentPage.value = page;
        };

        onBeforeUpdate(() => {
            pageDivs.value = [];
        });

        onMounted(() => {
            switch (window.location.hash) {
                case `#${pages[0].name.toLowerCase().replaceAll(' ', '-')}`:
                    goToPage(0, true);
                    break;

                case `#${pages[2].name.toLowerCase().replaceAll(' ', '-')}`:
                    goToPage(2, true);
                    break;
            }

            pageDivs.value.forEach((pageDiv, index) => {
                const elements = pageDiv.querySelectorAll('.animate-in');

                console.log(elements)

                if (currentPage.value === index) {
                    // Animate all elements in
                    anime({
                        targets: elements,
                        opacity: {
                            value: [0, 1],
                            duration: 1250,
                            //delay: 750,
                            easing: 'easeOutQuart'
                        },
                        scale: {
                            value: [0, 1],
                            duration: 1500,
                            easing: 'easeOutElastic(1, 1)'
                        },
                        delay: anime.stagger(50, { start: 700 })
                    });
                } else {
                    setTimeout(() => {
                        elements.forEach(element => {
                            if (!(element instanceof HTMLElement)) return
                            element.style.opacity = '1';
                            element.style.transform = 'scale(1)';
                        })
                    }, 1750)
                }

            });
        });

        const pageContents = []
        pageContents[0] = Pages.Broadcast

        return {
            pages,
            pageDivs,
            goToPage,
            currentPage,
            arrows: {
                normal: normalArrow,
                inverted: invertedArrow
            },
            pageContents
        };
    },

});
</script>

<style lang="scss" scoped>
$width: min(800px, 100%);
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
  margin: calc(#{$margin} / 2);
  margin-bottom: 0;
  margin-top: $margin;

  opacity: 1;

  transform: rotate(0deg);

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

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>