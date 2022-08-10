<template>
    <Header />

    <div class="page">
        <Tile
            :color="'#f8f8f8'"
            :interactive="false"
            :hideTitle="true"
            :border-color="'#f0f0f0'"
            style="height: auto; max-height: unset; width: 100%"
        >
            <div class="card">
                <div class="image">
                    <img :src="tileImages.me" />
                </div>
                <div class="text">
                    <p>
                        Hi! I'm Dan, I'm a software developer, broadcast
                        operator, sailor and pilot (almost).
                    </p>
                    <p>
                        Feel free to reach out if you're interested in working
                        together, need help with a project or just want a chat!
                    </p>
                    <p>
                        Check out the adjacent pages to see more about what I do
                        for work.
                    </p>
                </div>
            </div>
        </Tile>
        <div class="contact">
            <Tile
                v-for="(tile, tileIndex) in contactMethods"
                :key="tileIndex"
                :color="tile.colour"
                :link="tile.link"
                :image-url="tile.image ?? ''"
                :full-image="tile.fullImage ?? false"
                :interactive="tile.interactive ?? true"
                class="animate-in"
            >
                <template #title>
                    {{ tile.title }}
                </template>
            </Tile>
        </div>
        <h3 class="animate-in">My Work</h3>
        <div class="clients">
            <Tile color="#141616" :interactive="false" :hide-title="true">
                <div class="client card" style="color: white">
                    <div class="image">
                        <img :src="tileImages.faceit" />
                    </div>
                    <div class="text"><p>I've done loads for faceit</p></div>
                </div>
            </Tile>
        </div>
    </div>
</template>

<script lang="ts" setup>
import anime from 'animejs'

import Tile from './components/Tile.vue'
import Header from './components/Header.vue'

import tileImages from './assets/tile-images'

import { ref, reactive, onMounted } from 'vue'

interface Tile {
    name: string
    title: string
    image?: string
    fullImage?: boolean
    colour?: string
    width?: string
    link?: string
    invertColours?: boolean
    interactive?: boolean
}

const contactMethods = reactive<Tile[]>([
    {
        name: '',
        title: 'Email',
        image: tileImages.at,
        colour: '#D289F8',
        link: 'mailto:hello@danielshields.uk',
    },
    {
        name: '',
        title: 'GitHub',
        image: tileImages.github,
        colour: '#24292e',
        link: 'https://github.com/Dan-Shields',
    },
    {
        name: '',
        title: 'Twitter',
        image: tileImages.twitter,
        colour: '#1DA1F2',
        link: 'https://twitter.com/DanShieldsUK',
    },
    {
        name: '',
        title: 'LinkedIn',
        image: tileImages.linkedin,
        colour: '#2867B2',
        link: 'https://www.linkedin.com/in/dan98/',
    },
])

onMounted(() => {
    window.addEventListener('load', () => {
        anime({
            targets: '.animate-in',
            opacity: {
                value: [0, 1],
                duration: 1250,
                easing: 'easeOutQuart',
            },
            scale: {
                value: [0, 1],
                duration: 1500,
                easing: 'easeOutElastic(1, 1)',
            },
            delay: anime.stagger(100, { start: 500 }),
        })
    })
})
</script>

<style lang="scss">
#app {
    width: 800px;
    max-width: 100%;
    min-height: 90%;
    margin: 0 auto;

    font-family: 'Josefin Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    text-align: center;
}
</style>

<style lang="scss" scoped>
$margin: min(30px, 3vw);

.page {
    width: 100%;

    opacity: 1;

    border-radius: 20px;
}

.card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px 30px;
    box-sizing: border-box;
    column-gap: 20px;

    .text {
        text-align: left;
        font-size: 1.33em;
        flex-basis: 50%;
        min-width: 40%;
        flex-grow: 1;
    }

    .image {
        width: 200px;
        min-height: 200px;
        position: relative;

        img {
            border-radius: 50%;
            max-height: 100%;
            max-width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}

.contact {
    width: 100%;
    height: 200px;
    display: flex;

    > * {
        flex-basis: 200px;
    }
}

.clients {
    > * {
        height: auto;
    }
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
