
<template>
    <Tile
        width="100%"
        :color="'#ff9a0e'"
        :index="0"
        :interactive="false"
        class="animate-in"
        style="color: white"
    >
        <template #title>
            <u>Status:</u> Looking for Opportunities
        </template>
        <div class="header">
            <div style="flex-basis: 1; width: 40%">
                <p>
                </p>
            </div>

            <div style="flex-basis: 1; width: 40%">
                <p style="font-size: 1.33em; margin-bottom: 0">
                    Please get in touch if you feel you have a project that might suit me; I'm open to interesting projects in any field!
                </p>
            </div>
        </div>
    </Tile>
    <div class="projects-container">
        <h1>Projects</h1>
        <div class="projects">
            <el-collapse v-model="activeProjectName" accordion>
                <el-collapse-item>
                    <template #title>
                        <h2 class="project-name">FACEEAT</h2>
                    </template>
                    <div class="tags">
                        <el-tag type="success" effect="dark" size="mini">Fullstack Web</el-tag>
                    </div>
                    <p>A fullstack web-app for facilitiating COVID-safe catering at FACEIT events, some of which hosting over 200 guests.</p>
                    <p>Features include personalised orders, meal-time notifications, menu translations and integration with existing kitchen infrastructure.</p>
                    <p>Tech stack: Node.js, Vue and MongoDB.</p>
                </el-collapse-item>
    
                <el-collapse-item>
                    <template #title>
                        <h2 class="project-name">FACEIT CG</h2>
                    </template>
                    <div class="tags">
                        <el-tag type="success" effect="dark" size="mini">Fullstack Web</el-tag>
                        <el-tag type="danger" effect="dark" size="mini">Native</el-tag>
                    </div>
                    <p>A long-term R&D project aiming to simplify FACEIT's broadcast graphics creation and operation pipeline.</p>
                    <p>Components include an Adobe After Effects plugin, a web control panel, a web-based 2D graphics renderer, and a C# native app for playout to enterprise hardware.</p>
                </el-collapse-item>
    
                <el-collapse-item>
                    <template #title>
                        <h2 class="project-name">Virtual Broadcast Studio</h2>
                    </template>
                    <div class="tags">
                        <el-tag class="purple" effect="dark" size="mini">UE4/Unity</el-tag>
                        <el-tag type="danger" effect="dark" size="mini">Native</el-tag>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </el-collapse-item>
                
                <el-collapse-item>
                    <template #title>
                        <h2 class="project-name">NodeCG Packages</h2>
                    </template>
                    <div class="tags">
                        <el-tag type="warning" effect="dark" size="mini">Frontend Web</el-tag>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </el-collapse-item>
    
                <el-collapse-item>
                    <template #title>
                        <h2 class="project-name">League of Legends OCR HUD</h2>
                    </template>
                    <div class="tags">
                        <el-tag effect="dark" size="mini">Open Source</el-tag>
                        <el-tag type="danger" effect="dark" size="mini">Native</el-tag>
                    </div>
                    <p>A Node.js program for scraping gamestate data from a League of Legends game feed, allowing creation of custom HUDs.</p>
                    <div class="repos">
                        <div data="https://github.com/dan-shields/League-OCR-HUD" class="github-pinner" style="visibility: hidden;"></div>
                    </div>
                </el-collapse-item>

                <el-collapse-item>
                    <template #title>
                        <h2 class="project-name">DOTA 2 Cam Syncer</h2>
                    </template>
                    <div class="tags">
                        <el-tag effect="dark" size="mini">Open Source</el-tag>
                        <el-tag type="danger" effect="dark" size="mini">Native</el-tag>
                    </div>
                    <p>In collaboration with Jakub Szmyt, I developed two Node.js programs for </p>
                    <div class="repos">
                        <div data="https://github.com/dan-shields/dota-cams" class="github-pinner" style="visibility: hidden;"></div>
                    </div>
                </el-collapse-item>

                <el-collapse-item>
                    <template #title>
                        <h2 class="project-name">DREAM JAM 2021: Taking Inspiration</h2>
                    </template>
                    <div class="tags">
                        <el-tag class="purple" effect="dark" size="mini">UE4/Unity</el-tag>
                        <el-tag effect="dark" size="mini">Open Source</el-tag>
                        <el-tag type="danger" effect="dark" size="mini">Native</el-tag>
                    </div>
                    <p>In collaboration with Jakub Szmyt, I developed two Node.js programs for </p>
                    <div class="repos">
                        <div data="https://github.com/dan-shields/Taking-Inspiration" class="github-pinner" style="visibility: hidden;"></div>
                    </div>
                </el-collapse-item>

                <el-collapse-item>
                    <template #title>
                        <h2 class="project-name">UoM Esports: HiveAid & King of the North</h2>
                    </template>
                    <div class="tags">
                        <el-tag effect="dark" size="mini">Open Source</el-tag>
                        <el-tag type="success" effect="dark" size="mini">Fullstack Web</el-tag>
                    </div>
                    <p>In collaboration with Jakub Szmyt, I developed two Node.js programs for </p>
                    <div class="repos">
                        <div data="https://github.com/UoMEsports/UoM-Website" class="github-pinner" style="visibility: hidden;"></div>
                        <div data="https://github.com/UoMEsports/HiveAid-Donation-Tracker" class="github-pinner" style="visibility: hidden;"></div>
                        <div data="https://github.com/UoMEsports/KotN-VI-Website" class="github-pinner" style="visibility: hidden;"></div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script lang="ts">
import anime from 'animejs'
import { defineComponent, onMounted, ref } from 'vue'

import { ElCollapse, ElCollapseItem, ElTag } from 'element-plus'

import Tile from '../Tile.vue'

export default defineComponent({
    components: {
        Tile,
        ElCollapse,
        ElCollapseItem,
        ElTag
    },
    setup () {
        onMounted(() => {
            anime({
                targets: '.projects-container',
                translateY: [200, 0],
                opacity: [0, 1],
                delay: 900,
                duration: 1000,
                easing: 'easeOutCubic'
            })
        })

        const activeProjectName = ref<string | undefined>(undefined)

        return {
            activeProjectName
        }
    }
})
</script>

<style scoped lang="scss">

$margin: min(30px, 3vw);

.projects-container {
    border-radius: 10px;
    width: calc(100% - #{$margin});
    margin: 0 calc(#{$margin} / 2);
    height: 100%;

    background-color: rgb(248, 248, 248);

    padding: 0;

    margin-bottom: 50px;

    opacity: 0;

    > h1 {
        padding: 10px;
        padding-top: 15px;
        background-color: rgb(231, 171, 80);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin-bottom: 0px;
        margin-top: 0;
        color: white;
    }

    .projects {
        padding: 0 2px;

        .project-name {
            margin-left: 15px;
            overflow: hidden;
            white-space: nowrap;
        }

        p {
            text-align: left;
            margin: 5px 20px;
        }

        .tags {
            margin-left: 15px;
            text-align: left;
            > * {
                margin-left: 5px;
            }

            .purple {
                $color: rgb(173, 24, 173);
                background-color: $color;
                border-color: $color;
            }

            .dark-blue {
                $color: rgb(46, 24, 173);
                background-color: $color;
                border-color: $color;
            }

            .white {
                background-color: white;
                border-color: rgb(199, 199, 199);
                color: black;
            }
        }

        .repos {
            display: flex;
            justify-content: center;
            padding: 0 10px;
        }
    }
}

el-collapse-item {
    p {
        font-size: 1.5em;
    }
}

.header {
    display: flex;
    width: 100%;
    justify-content: space-around;
    text-align: left;
}

* {
    --el-collapse-header-background-color: rgb(248, 248, 248);
    --el-collapse-content-font-size: 15px;
}

</style>

<style>
.el-collapse-item__content {
    padding-bottom: 5px;
}
</style>
