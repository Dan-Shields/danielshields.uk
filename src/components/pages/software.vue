
<template>
    <Tile
        width="100%"
        :color="'#ff9a0e'"
        :index="0"
        :interactive="false"
        class="animate-in header-tile"
        style="color: white"
    >
        <template #title>
            <span class="header-title"><span style="font-weight: 300; font-size: 0.8em">Status:</span><br>Open to new clients</span>
        </template>
        <div class="header">
            <div style="flex-basis: 1; width: 40%">
                <p style="font-size: 1.33em; margin-bottom: 0">
                    
                </p>
            </div>

            <div style="flex-basis: 1; width: 40%">
                <h5></h5>
                <ul>
                    <li>Fullstack Web Development</li>
                    <li>Real-time Broadcast Graphics</li>
                    <li></li>
                </ul>
            </div>
        </div>
    </Tile>
    <div class="projects-container">
        <h1>Projects</h1>
        <div class="projects">
            <el-collapse v-model="activeProjectName" accordion>
                <el-collapse-item class="project">
                    <template #title>
                        <div class="title">
                            <h2 class="name">FACEEAT</h2>
                            <div class="tags">
                                <el-tag type="success" effect="dark" size="mini">Fullstack Web</el-tag>
                            </div>
                        </div>
                    </template>
                    <div class="content">
                        <div class="description">
                            <p>A fullstack web-app for facilitiating COVID-safe catering at FACEIT events, some of which hosting over 200 guests.</p>
                            <p>Features include personalised orders, meal-time notifications, menu translations and integration with existing kitchen infrastructure.</p>
                            <p>Tech stack: Node.js, Vue and MongoDB.</p>
                        </div>
                    </div>
                </el-collapse-item>
    
                <el-collapse-item class="project">
                    <template #title>
                        <div class="title">
                            <h2 class="name">FACEIT CG</h2>
                            <div class="tags">
                                <el-tag class="broadcast-gfx" effect="dark" size="mini">Broadcast Graphics</el-tag>
                                <el-tag type="success" effect="dark" size="mini">Fullstack Web</el-tag>
                                <el-tag type="danger" effect="dark" size="mini">Native</el-tag>
                            </div>
                        </div>
                    </template>
                    <div class="content">
                        <div class="description">
                            <p>A long-term R&D project aiming to simplify FACEIT's broadcast graphics creation and operation pipeline.</p>
                            <p>Components include an Adobe After Effects plugin, a web control panel, a web-based 2D graphics renderer, and a C# native app for playout to enterprise hardware.</p>
                        </div>
                    </div>
                </el-collapse-item>
    
                <el-collapse-item class="project">
                    <template #title>
                        <div class="title">
                            <h2 class="name">Siege EUL Final: Virtual Broadcast Studio</h2>
                            <div class="tags">
                                <el-tag class="broadcast-gfx" effect="dark" size="mini">Broadcast Graphics</el-tag>
                                <el-tag class="purple" effect="dark" size="mini">UE4/Unity</el-tag>
                                <el-tag type="danger" effect="dark" size="mini">Native</el-tag>
                            </div>
                        </div>
                    </template>
                    <div class="content">
                        <div class="description">
                            <p>With remote production becoming a large part of esports recently, FACEIT were looking to add flair to their  </p>
                        </div>
                    </div>
                </el-collapse-item>
                
                <el-collapse-item class="project">
                    <template #title>
                        <div class="title">
                            <h2 class="name">NodeCG Packages</h2>
                            <div class="tags">
                                <el-tag class="broadcast-gfx" effect="dark" size="mini">Broadcast Graphics</el-tag>
                            </div>
                        </div>
                    </template>
                    <div class="content">
                        <div class="description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </el-collapse-item>
    
                <el-collapse-item class="project">
                    <template #title>
                        <div class="title">
                            <h2 class="name">League of Legends OCR HUD</h2>
                            <div class="tags">
                                <el-tag class="opensource" effect="dark" size="mini">Open Source</el-tag>
                                <el-tag type="danger" effect="dark" size="mini">Native</el-tag>
                            </div>
                        </div>
                    </template>
                    <div class="content">
                        <div class="description">
                            <p>A Node.js program for scraping gamestate data from a League of Legends game feed, allowing creation of custom broadcast HUDs.</p>
                        </div>
                        <div class="repos">
                            <div data="https://github.com/dan-shields/League-OCR-HUD" class="github-pinner" style="visibility: hidden;"></div>
                        </div>
                    </div>
                </el-collapse-item>

                <el-collapse-item class="project">
                    <template #title>
                        <div class="title">
                            <h2 class="name">DREAM JAM 2021: Taking Inspiration</h2>
                            <div class="tags">
                                <el-tag class="opensource" effect="dark" size="mini">Open Source</el-tag>
                                <el-tag class="purple" effect="dark" size="mini">UE4/Unity</el-tag>
                                <el-tag type="danger" effect="dark" size="mini">Native</el-tag>
                            </div>
                        </div>
                    </template>
                    <div class="content">
                        <div class="description">
                            <p>A 2D Stealth Game made in 2 weeks for DREAM JAM 2021 where you infiltrate someone's dream in order to steal an idea they're keeping secret!</p>
                        </div>
                        <div class="repos">
                            <div data="https://github.com/dan-shields/Taking-Inspiration" class="github-pinner" style="visibility: hidden;"></div>
                        </div>
                    </div>
                </el-collapse-item>

                <el-collapse-item class="project">
                    <template #title>
                        <div class="title">
                            <h2 class="name">UoM Esports: HiveAid & King of the North</h2>
                            <div class="tags">
                                <el-tag class="opensource" effect="dark" size="mini">Open Source</el-tag>
                                <el-tag type="success" effect="dark" size="mini">Fullstack Web</el-tag>
                            </div>
                        </div>
                    </template>
                    <div class="content">
                        <div class="description">
                            <p></p>
                        </div>
                        <div class="repos">
                            <div data="https://github.com/UoMEsports/UoM-Website" class="github-pinner" style="visibility: hidden;"></div>
                            <div data="https://github.com/UoMEsports/HiveAid-Donation-Tracker" class="github-pinner" style="visibility: hidden;"></div>
                            <div data="https://github.com/UoMEsports/KotN-VI-Website" class="github-pinner" style="visibility: hidden;"></div>
                        </div>
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
    margin: $margin calc(#{$margin} / 2);
    height: 100%;

    background-color: rgb(248, 248, 248);

    padding: 0;

    opacity: 0;

    > h1 {
        padding: 10px;
        padding-top: 15px;
        background-color: rgb(243, 167, 53);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin-bottom: 0px;
        margin-top: 0;
        color: white;
    }

    .projects {
        padding: 0 2px;

        .project {

            .title {
                margin: 0;

                text-align: left;

                .name {
                    margin: 0;
                    margin-left: 15px;
                    margin-bottom: 3px;
                    margin-top: -10px;
                    line-height: 0px;
                    white-space: nowrap;
                }

                .tags {    
                    height: 20px;
                    margin-left: 11px;
                    margin-top: -15px;
                    
                    > * {
                        margin-left: 5px;
                    }
        
                    .purple {
                        $color: rgb(173, 24, 173);
                        background-color: $color;
                        border-color: $color;
                    }

                    .broadcast-gfx {
                        $color: rgb(5, 224, 195);
                        background-color: $color;
                        border-color: $color;
                    }
        
                    .opensource {
                        $color: rgb(0, 110, 255);
                        background-color: $color;
                        border-color: $color;
                    }
        
                    .white {
                        background-color: white;
                        border-color: rgb(199, 199, 199);
                        color: black;
                    }
                }
            }

            .content {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                gap: 5px;
                width: calc(100% - 40px);

                padding: 0 20px;

                .description {
                    flex-basis: 200px;
                    flex-grow: 2;

                    p {
                        text-align: left;
                        line-height: 1.0;
                        font-size: 1.1em;
                    }
                }

                .repos {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    padding: 10px 0;
                    max-width: 100%;

                    > * {
                        min-width: 170px;
                        flex-grow: 1;
                        flex-basis: 150px;
                    }
                }
            }
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

    max-height: 60%;
}

.header-tile {
    position: relative;

    .header-title {
        position: absolute;
        top: 25px;
        left: 0;
        width: 100%;
        text-align: center;
    }
}

* {
    --el-collapse-header-background-color: rgb(248, 248, 248);
    --el-collapse-content-font-size: 15px;
    --el-collapse-header-height: 72px;
}

</style>

<style>
.el-collapse-item__content {
    padding-bottom: 5px;
}
</style>
