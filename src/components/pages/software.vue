<template>
    <Tile
        width="100%"
        :color="'#ff9a0e'"
        :index="0"
        :interactive="false"
        class="animate-in header-tile"
        style="color: white; height: auto; max-height: unset;"
    >
        <template #title>
            <span style="font-weight: 300; font-size: 0.8em">Status:</span>
            <br>
            <span style="color: rgb(21, 172, 21);">Open to new clients</span>
        </template>
        <div class="header">
            <p>I'm looking to take on more clients needing any of the following solutions.</p>
            <p>If you have a project that might suit my experience please don't hestitate to get in touch!</p>

            <div class="project-types">
                <div>
                    <h3>Custom broadcast graphics packages</h3>
                    <p>I can take broadcasts of any size to the next level with fully custom control panels and hand animated graphics.</p>
                    <p>Making use of NodeCG and custom-made libraries, whatever the use-case I can deliver a platform that makes dealing with broadcast graphics easy.</p>
                </div>
                <div>
                    <h3>Full-stack web development</h3>
                    <p>Using a modern tech-stack I can design and create performant, functional and beautiful websites.</p>
                    <p>Whether you need an ecommerce ship, an internal infrastructure site or a blog, reach out to discuss how I can get your project off the ground.</p>
                </div>
                <div>
                    <h3>AR/virtual studio solutions</h3>
                    <p>Looking to add flair to your esports broadcast? Consider adding a virtual studio to your remote production workflow, or AR elements to supplement your physical studio.</p>
                    <p>Reach out to discuss possibilities.</p>
                </div>
            </div>
            <p></p>
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
                            <p>Components developed include an Adobe After Effects plugin, a web control panel, a web-based 2D graphics renderer, and a C# native app for final playout to enterprise hardware.</p>
                        </div>
                    </div>
                </el-collapse-item>

                <el-collapse-item class="project">
                    <template #title>
                        <div class="title">
                            <h2 class="name">Siege EUL Finals: Virtual Broadcast Studio</h2>
                            <div class="tags">
                                <el-tag class="broadcast-gfx" effect="dark" size="mini">Broadcast Graphics</el-tag>
                                <el-tag class="purple" effect="dark" size="mini">UE4/Unity</el-tag>
                            </div>
                        </div>
                    </template>
                    <div class="content">
                        <div class="description">
                            <p>With remote production becoming a large part of esports recently, FACEIT were looking to add flair to their package for the R6 Siege EUL Finals in early 2021.</p>
                            <p>Made in Unreal Engine 4 in just 4 days, the project was operated remotely, pulling feeds from 5 remote talent members and offering animated transitions between each scene.</p>
                        </div>
                        <div class="videos">
                            <iframe
                                src="https://clips.twitch.tv/embed?clip=SmokySincereOrcaGivePLZ&parent=localhost&controls=false&muted=true"
                                frameborder="0"
                                allowfullscreen="false"
                                scrolling="no"
                                width="640"
                                height="360"
                                loading="lazy"
                            ></iframe>
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
                            <p>Makes use of Google's Cloud Vision API to get the data that is unavailable to small tournament organisers.</p>
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
                            </div>
                        </div>
                    </template>
                    <div class="content">
                        <div class="description">
                            <p>A 2D stealth game made with Unity in 2 weeks for DREAM JAM 2021 where you infiltrate someone's dream in order to steal an idea they're keeping secret!</p>
                        </div>
                        <div class="repos">
                            <div data="https://github.com/dan-shields/Taking-Inspiration" class="github-pinner" style="visibility: hidden;"></div>
                            <iframe
                                frameborder="0"
                                src="https://itch.io/embed/1269379"
                                width="208"
                                height="167"
                                loading="lazy"
                            >
                                <a href="https://daanbread.itch.io/taking-inspiration">Taking Inspiration by DaanBread</a>
                            </iframe>
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
                            <p>As Tech Officer at the University of Manchester Esports Society, I developed and maintained a series of (admittedly over-engineered) websites for the various events we ran.</p>
                            <p>These included a tournament registration site, a charity-stream donation tracker, and an elegant landing page for the society.</p>
                        </div>
                        <div class="repos">
                            <div data="https://github.com/uomesports/UoM-Website" class="github-pinner" style="visibility: hidden;"></div>
                            <div data="https://github.com/uomesports/HiveAid-Donation-Tracker" class="github-pinner" style="visibility: hidden;"></div>
                            <div data="https://github.com/uomesports/KotN-VI-Website" class="github-pinner" style="visibility: hidden;"></div>
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
        onMounted( () => {
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
                        $color: rgb(17, 204, 179);
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
    width: 100%;
    font-size: 1.33em;
    text-align: left;
    padding: 0 20px;
    box-sizing: border-box;

    > p {
        margin-top: 0;
    }

    .project-types {
        > div {
            background: #e4890a;
            border-radius: 5px;
            padding: 15px;
            margin-bottom: 20px;
        }
    }
}

* {
    --el-collapse-header-background-color: rgb(248, 248, 248);
    --el-collapse-content-font-size: 15px;
    --el-collapse-header-height: 72px;
}

@media only screen and (max-width: 470px) {
  .project .title .name {
    font-size: 1.25em;
  }
}
@media only screen and (max-width: 400px) {
  .project .title .name {
    font-size: 1.1em;
  }
}

</style>

<style>
.el-collapse-item__content {
    padding-bottom: 5px;
}
.el-collapse-item__arrow {
    --font-size: 24px;
}
</style>
