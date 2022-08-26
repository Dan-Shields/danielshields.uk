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
                <div class="row flex">
                    <div class="image header">
                        <img :src="tileImages.me" />
                    </div>
                    <div class="text" style="font-size: 1.33em">
                        <p>
                            Hi, I'm Dan! I'm a software developer, broadcast
                            operator, sailor and (almost) a pilot.
                        </p>
                        <p>
                            I'm always looking for more work so feel free to
                            reach out if you're interested in working together.
                        </p>
                    </div>
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
        <h2>My Work</h2>
        <div class="clients">
            <Tile color="#141616" :interactive="false" :hide-title="true">
                <div class="client card" style="color: white">
                    <div class="row">
                        <h3>FACEIT Media</h3>
                        <div class="image">
                            <img :src="tileImages.faceit" />
                        </div>
                    </div>

                    <hr />

                    <div class="row">
                        <div class="text left">
                            <h5>Broadcast & LED Graphics Development</h5>
                            <p>
                                Web-based graphics for integreation into live
                                broadcasts or LED stages.
                            </p>
                            <p>Projects include:</p>
                            <ul>
                                <li>Rocket League HUD</li>
                                <li>Rainbow Six: Siege Game State LED Asset</li>
                            </ul>
                        </div>
                        <div class="bg-image right">
                            <img :src="tileImages.cec" />
                        </div>
                    </div>

                    <hr />

                    <div class="row">
                        <div class="bg-image left">
                            <img :src="tileImages.cec" />
                        </div>
                        <div class="text right">
                            <h5>FACEEATS</h5>
                            <p>
                                A fullstack web-app for facilitiating COVID-safe
                                catering at FACEIT events, some of which hosting
                                over 200 guests.
                            </p>
                            <p>
                                Features include personalised orders, meal-time
                                notifications, menu translations and integration
                                with existing kitchen infrastructure.
                            </p>
                            <p>Tech stack: Node.js, Vue and MongoDB.</p>
                        </div>
                    </div>

                    <hr />

                    <div class="row">
                        <div class="text left">
                            <h5>XPression Operation</h5>
                        </div>
                        <div class="bg-image right">
                            <img :src="tileImages.cec" />
                        </div>
                    </div>

                    <hr />

                    <div class="row">
                        <div class="bg-image left">
                            <img :src="tileImages.cec" />
                        </div>
                        <div class="text right">
                            <h5>Other Projects</h5>
                        </div>
                    </div>
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

import { reactive, onMounted } from 'vue'

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
    box-sizing: border-box;

    position: relative;
    z-index: 0;
    width: 100%;

    hr {
        border-color: rgb(86, 86, 86);
        margin: 0;
    }

    .row {
        width: 100%;
        padding: 20px 30px;
        box-sizing: border-box;
        position: relative;

        &.flex {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            column-gap: 20px;
        }

        .text {
            text-align: left;
            flex-basis: 50%;
            min-width: 40%;
            flex-grow: 0;
            z-index: 2;

            h5 {
                font-size: 1.33em;
            }

            &.right {
                padding-left: 40%;
            }

            &.left {
                padding-right: 40%;
            }
        }

        .image {
            width: 200px;
            height: 200px;
            position: relative;
            z-index: 2;
            border-radius: 50%;
            background-color: rgba(42, 42, 42, 0.85);
            flex-grow: 0;

            &.header {
                border-radius: 0;
                background-color: unset;

                img {
                    border-radius: 50%;
                }
            }

            img {
                max-height: 100%;
                max-width: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        .bg-image {
            position: absolute;
            top: 0;
            height: 100%;
            z-index: 1;

            img {
                height: 100%;
                border-radius: 10px;
            }
            &.right {
                right: 0;
                left: auto;
            }
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

.animate-in {
    opacity: 0;
    transform: scale(0);
}
</style>
