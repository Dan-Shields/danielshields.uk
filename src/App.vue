<template>
    <Header />

    <div class="page p-2.5">
        <div
            class="p-5 m-2.5 bg-gradient-to-br from-neutral-200 to-neutral-100 rounded-xl flex flex-wrap gap-4 justify-between items-center animate-in"
        >
            <div
                class="basis-[144px] grow overflow-hidden aspect-video sm:aspect-auto sm:rounded-full rounded-xl"
            >
                <img
                    class="sm:translate-y-0 -translate-y-[33%] sm:scale-110"
                    src="./assets/me-full.jpg"
                />
            </div>
            <div class="text-xl text-left space-y-4 basis-[400px] grow">
                <p>
                    Hi, I'm Dan! I'm a broadcast software developer & operator,
                    sailor and private pilot.
                </p>
                <p>
                    This page is to showcase my work experience and I'm always
                    looking for more work so feel free to reach out via any of
                    the platforms below to discuss how I can help with your next
                    broadcast!
                </p>
                <p></p>
            </div>
        </div>
        <div class="flex flex-wrap">
            <Tile
                v-for="(tile, tileIndex) in contactMethods"
                :key="tileIndex"
                :color="tile.colour"
                :link="tile.link"
                :image-url="tile.image ?? ''"
                :full-image="tile.fullImage ?? false"
                :interactive="tile.interactive ?? true"
                class="animate-in basis-1/4 aspect-square"
            >
                <template #title>
                    {{ tile.title }}
                </template>
            </Tile>
        </div>
        <h1 class="pt-4 text-3xl underline border-t border-slate-500 mt-3 mx-3">
            My Work
        </h1>
        <div class="m-2.5 space-y-4">
            <div
                class="p-5 bg-gradient-to-br from-neutral-800 to-neutral-600 text-white rounded-xl space-y-4 text-sm"
            >
                <div class="pb-5">
                    <img
                        class="sm:w-1/2 w-4/5 m-auto mt-2"
                        src="./assets/clients/faceit-full-bright.svg"
                    />
                </div>

                <Project
                    color="#3f3f3f"
                    :bgImage="projectImages.cecBg"
                    :textRight="false"
                >
                    <h5 class="text-xl border-b border-orange-400">
                        Broadcast & LED Graphics Development
                    </h5>
                    <p>
                        Web-based graphics for integration into live broadcasts
                        or LED stages.
                    </p>
                    <p>Projects include:</p>
                    <ul class="list-disc list-inside">
                        <li>
                            <a
                                href="https://youtu.be/aCZDfpzGnkg?t=1464"
                                target="_blank"
                                class="underline text-orange-300 hover:text-orange-500"
                            >
                                Fully-custom Rocket League HUD
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/DanShieldsUK/status/1528507135134519296"
                                target="_blank"
                                class="underline text-orange-300 hover:text-orange-500"
                            >
                                Rainbow Six: Siege game state LED asset
                            </a>
                        </li>
                        <li>DOTA 2 draft phase LED asset (pictured)</li>
                    </ul>
                </Project>

                <Project
                    color="#3f3f3f"
                    :image="projectImages.xpression"
                    :bgImage="projectImages.r6MajorBg"
                    :textRight="true"
                >
                    <h5 class="text-xl border-b border-orange-400">
                        Graphics Operator
                    </h5>
                    <p>
                        XPression and CasparCG operation at major international
                        events including:
                    </p>
                    <ul class="list-disc list-inside">
                        <li><i>Rainbow Six Majors</i> (Charlotte & Mexico)</li>
                        <li><i>FLASHPOINT 2 & 3</i></li>
                        <li><i>ECS Season 8 Finals</i></li>
                    </ul>
                </Project>

                <Project
                    color="#3f3f3f"
                    :bgImage="projectImages.r6Mexico"
                    :textRight="false"
                >
                    <h5 class="text-xl border-b border-orange-400">FACEEATS</h5>
                    <p>
                        A fullstack web-app for facilitiating COVID-safe
                        catering at <i>FLASHPOINT 2</i> and
                        <i>Six Major: Mexico</i> for over 250 guests.
                    </p>
                    <p>
                        Features include personalised orders, meal-time
                        notifications, menu translations and integration with
                        existing kitchen infrastructure.
                    </p>
                    <p>Tech stack: Vue, Node.js, MongoDB.</p>
                </Project>

                <Project color="#3f3f3f">
                    <h5 class="text-xl">Other Projects</h5>
                    <div class="space-y-4">
                        <div>
                            <h6
                                class="text-base border-b border-orange-400 mb-1"
                            >
                                Remote Broadcast Graphics Pipeline
                            </h6>
                            <div class="space-y-2">
                                <p>
                                    Proof-of-concept project to explore the
                                    possibilities for streamlining FACEIT's
                                    process of getting broadcast graphics to
                                    air.
                                </p>
                                <p>
                                    Assets started in After Effects before being
                                    exported to a web-interface and played out
                                    in-browser. A .NET app handled layering and
                                    playout to Blackmagic Decklinks. Operators
                                    accessed the system via a browser-based
                                    XPression-like control panel.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h6
                                class="text-base border-b border-orange-400 mb-1"
                            >
                                Unreal Engine Augmented Reality Studio
                            </h6>
                            <div class="space-y-2">
                                <p>
                                    At FLASHPOINT 2, a 5-week-long production,
                                    we experimented with adding 3D assets to the
                                    broadcast using Unreal Engine and FreeD
                                    camera tracking.
                                </p>
                                <div class="relative pb-[56.25%] pt-[25px] h-0">
                                    <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/0t8uqN2CgRo?clip=UgkxkeumM1qDPrkRJOWvjS0H2Ns_zme4JHcf&amp;clipt=EN7nxgEYy9_HAQ"
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="encrypted-media"
                                        loading="lazy"
                                        class="absolute top-0 left-0 w-full h-full"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h6
                                class="text-base border-b border-orange-400 mb-1"
                            >
                                Unreal Engine Virtual Studio
                            </h6>
                            <div class="space-y-2">
                                <p>
                                    For the R6 Siege EUL Finals in early 2021,
                                    FACEIT wanted a new virtual studio to house
                                    their remote talent. Simple pre-programmed
                                    cues controlled by a Stream Deck added
                                    production value for little effort.
                                </p>
                                <div class="relative pb-[56.25%] pt-[25px] h-0">
                                    <iframe
                                        src="https://clips.twitch.tv/embed?clip=SmokySincereOrcaGivePLZ&parent=danielshields.uk&muted=true"
                                        frameborder="0"
                                        allowfullscreen="true"
                                        scrolling="no"
                                        height="378"
                                        width="620"
                                        loading="lazy"
                                        class="absolute top-0 left-0 w-full h-full"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h6
                                class="text-base border-b border-orange-400 mb-1"
                            >
                                Automated Quake Observer
                            </h6>
                            <p>
                                Script for swapping between
                                <i>Quake Champions</i> players without the need
                                for an operator. Computer vision was used as the
                                game did not offer gamestate integration.
                            </p>
                        </div>
                        <div>
                            <h6
                                class="text-base border-b border-orange-400 mb-1"
                            >
                                Discord Player Camera Controller
                            </h6>
                            <p>
                                Computer vision-based script for controlling a
                                Discord video call, ensuring users' presence and
                                enabling camera focus. Used on FLASHPOINT 3.
                            </p>
                        </div>
                    </div>
                </Project>
            </div>

            <div
                class="p-5 bg-gradient-to-br to-[#2e00f8] from-[#2700db] text-white rounded-xl space-y-4 text-sm"
            >
                <div class="pb-5">
                    <img
                        class="sm:max-w-1/2 max-w-4/5 m-auto mt-2 max-h-[175px]"
                        src="./assets/clients/mclaren-shadow.png"
                    />
                </div>

                <Project
                    color="#004EF8"
                    :image="projectImages.mclaren"
                    :bgImage="projectImages.mclarenBg"
                    :textRight="false"
                >
                    <h5 class="text-xl border-b border-orange-500">
                        Data-Driven Broadcast Graphics
                    </h5>
                    <p>
                        <i>McLaren Shadow</i>'s "Watchalong" shows are all about
                        audience engagement, and so for their
                        <a
                            href="https://youtu.be/qqPgxxWRFLk?t=5578"
                            target="_blank"
                            class="underline text-orange-400 hover:text-orange-200"
                        >
                            Indy 500 show</a
                        >
                        they commissioned an overlay with a section dedicated to
                        following their 3 drivers' times and positions. This
                        required pulling live track data and rendering that in a
                        web-graphic.
                    </p>
                    <p>
                        The package also included live-updating bingo and news
                        ticker graphics that could be controlled from behind the
                        scenes.
                    </p>
                </Project>
            </div>

            <div
                class="p-5 bg-gradient-to-br to-gray-200 from-gray-300 text-black rounded-xl space-y-4 text-sm"
            >
                <div>
                    <img
                        class="sm:max-w-1/2 max-w-4/5 m-auto max-h-[175px]"
                        src="./assets/clients/ee.png"
                    />
                </div>

                <Project
                    color="#ffffff"
                    :image="projectImages.xpression"
                    :bgImage="projectImages.twitchCon"
                    :textRight="true"
                >
                    <h5 class="text-xl border-b border-red-700">
                        XPression Operator
                    </h5>
                    <p>
                        Working from Esports Engine's Stratford studio or OB
                        trucks, with and without dedicated on-line GFX
                        producers.
                    </p>
                    <p>Events include:</p>
                    <ul class="list-disc list-inside">
                        <li><i>Twitch Rivals: TwitchCon Amsterdam</i></li>
                        <li><i>FIFA Global Series Playoffs</i></li>
                        <li><i>FIFA Team of the Season Cup</i></li>
                    </ul>
                </Project>
            </div>
            <div
                class="p-5 bg-gradient-to-br to-purple-800 from-purple-900 text-white rounded-xl space-y-4 text-sm"
            >
                <div>
                    <img
                        class="sm:max-w-1/2 max-w-4/5 m-auto max-h-[175px] rounded-xl"
                        src="./assets/clients/uomesports-banner.png"
                    />
                </div>

                <Project
                    color="#3d1c5a"
                    :image="projectImages.kotn"
                    :bgImage="projectImages.kotnBg"
                    :textRight="false"
                >
                    <h5 class="text-xl border-b border-yellow-500">
                        King of the North
                    </h5>
                    <p>
                        King of the North was a student-run gaming festival
                        hosted at the University of Manchester. The events
                        featured a country-wide open qualifier followed by a
                        weekend-long finals show. At its peak in 2019 there were
                        400 participants.
                    </p>
                    <p>
                        I was broadcast lead for the 2018 and 2019 events,
                        creating the
                        <a
                            href="https://github.com/UoMEsports/KotN-Graphics-Bundle"
                            target="_blank"
                            class="underline text-yellow-400 hover:text-yellow-200"
                            >broadcast graphics package</a
                        >
                        and the
                        <a
                            href="https://github.com/UoMEsports/KotN-VI-Website"
                            target="_blank"
                            class="underline text-yellow-400 hover:text-yellow-200"
                        >
                            webapp for teams to register for the qualifiers</a
                        >
                        and verify their student status.
                    </p>
                    <p>
                        I was also the project lead for KotN VII, an event
                        scheduled for March 2020, but unfortunately it was
                        cancelled due to COVID.
                    </p>
                </Project>

                <Project
                    color="#3d1c5a"
                    :image="projectImages.hiveaid"
                    :bgImage="projectImages.hiveaidBg"
                    :textRight="true"
                >
                    <h5 class="text-xl border-b border-yellow-500">HiveAid</h5>
                    <p>
                        Raising money for <i>Special Effect</i>, HiveAid was
                        billed as an all-star mixup, pulling players from across
                        the university esports scene.
                    </p>
                    <p>
                        I was broadcast lead for both events which raised over
                        £500 each. As well as the
                        <a
                            href="https://github.com/UoMEsports/HiveAid-bundle"
                            target="_blank"
                            class="underline text-yellow-400 hover:text-yellow-200"
                            >broadcast graphics package</a
                        >, I created and deployed a
                        <a
                            href="https://github.com/UoMEsports/HiveAid-Donation-Tracker"
                            target="_blank"
                            class="underline text-yellow-400 hover:text-yellow-200"
                        >
                            fork of the <i>Games Done Quick</i> donation
                            tracker</a
                        >
                        which integrated with the broadcast and allowed donors
                        to give money via PayPal.
                    </p>
                </Project>
            </div>

            <div
                class="p-5 bg-gradient-to-br from-[#4ad8ab] to-[#30bfc2] rounded-xl space-y-4 text-sm"
            >
                <div>
                    <h1 class="text-4xl text-white">Open Source</h1>
                </div>

                <Project color="#fafafa" :textRight="false">
                    <h5 class="text-xl border-b border-[#4ad8ab]">
                        League of Legends OCR HUD
                    </h5>
                    <p>
                        A Node.js program for scraping gamestate data from a
                        League of Legends game feed, allowing creation of custom
                        broadcast HUDs.
                    </p>
                    <p>
                        Makes use of Google's Cloud Vision API to get the data
                        that is unavailable to small tournament organisers.
                    </p>
                    <div class="flex justify-center flex-wrap max-w-full py-2">
                        <div
                            data="https://github.com/dan-shields/League-OCR-HUD"
                            class="github-pinner"
                            style="visibility: hidden"
                        ></div>
                    </div>
                </Project>

                <Project color="#fafafa" :textRight="true">
                    <h5 class="text-xl border-b border-[#4ad8ab]">
                        NodeCG Utilities
                    </h5>
                    <p>
                        A couple of utilities useful for developing NodeCG
                        bundles.
                    </p>
                    <p>
                        The first allows the use of Vite via a plugin, a modern
                        bundler (finally no more webpack!). The second attempts
                        to bridge the gap between a NodeCG Replicant and Vue's
                        reactivity model in a sensible way.
                    </p>
                    <div class="flex justify-center flex-wrap max-w-full py-2">
                        <div
                            data="https://github.com/dan-shields/vite-plugin-nodecg"
                            class="github-pinner"
                            style="visibility: hidden"
                        ></div>
                        <div
                            data="https://github.com/dan-shields/nodecg-vue-composable"
                            class="github-pinner"
                            style="visibility: hidden"
                        ></div>
                    </div>
                </Project>
            </div>
        </div>
        <Broadcast class="mt-5" />
    </div>
</template>

<script lang="ts" setup>
import anime from 'animejs'

import Tile from './components/Tile.vue'
import Header from './components/Header.vue'

import projectImages from './assets/projects'
import contactImages from './assets/contact'

import { reactive, onMounted } from 'vue'
import Project from './components/Project.vue'
import Broadcast from './components/pages/broadcast.vue'

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
        image: contactImages.at,
        colour: '#D289F8',
        link: 'mailto:hello@danielshields.uk',
    },
    {
        name: '',
        title: 'GitHub',
        image: contactImages.github,
        colour: '#24292e',
        link: 'https://github.com/Dan-Shields',
    },
    {
        name: '',
        title: 'Twitter',
        image: contactImages.twitter,
        colour: '#1DA1F2',
        link: 'https://twitter.com/DanShieldsUK',
    },
    {
        name: '',
        title: 'LinkedIn',
        image: contactImages.linkedin,
        colour: '#2867B2',
        link: 'https://www.linkedin.com/in/dan98/',
    },
])

onMounted(() => {
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
        delay: anime.stagger(100, { start: 200 }),
    })

    anime({
        targets: '.fade-in',
        opacity: {
            value: [0, 1],
            duration: 1000,
            easing: 'easeOutQuart',
        },
        delay: 1100,
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

.animate-in {
    opacity: 0;
    transform: scale(0);
}
.fade-in {
    opacity: 0;
}
</style>
