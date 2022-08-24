<template>
    <Tile
        width="100%"
        :color="'#2781FF'"
        :index="0"
        :interactive="false"
        class="animate-in header-tile"
        style="color: white; height: auto; max-height: unset"
    >
        <template #title>
            <span style="font-weight: 300; font-size: 0.8em">Status:</span>
            <br />
            <span style="color: rgb(52, 255, 52)">Open to new clients</span>
        </template>
        <div class="header">
            <p>
                If you're looking for an experienced broadcast graphics operator
                or technical broadcast producer, please don't hestitate to get
                in touch!
            </p>
            <div class="familiar-tech">
                <h5 style="text-align: center">Familiar Technologies</h5>
                <div class="tech-logos">
                    <div>
                        <div class="img-container">
                            <img :src="techLogos.bmd" />
                        </div>
                        <h5>Blackmagic Hardware</h5>
                    </div>
                    <div>
                        <div class="img-container">
                            <img :src="techLogos.casparcg" />
                        </div>
                        <h5>CasparCG</h5>
                    </div>
                    <div>
                        <div class="img-container">
                            <img :src="techLogos.xpression" />
                        </div>
                        <h5>Ross XPression</h5>
                    </div>
                    <div>
                        <div class="img-container">
                            <img :src="techLogos.obs" />
                        </div>
                        <h5>OBS Studio</h5>
                    </div>
                    <div>
                        <div class="img-container">
                            <img :src="techLogos.vmix" />
                        </div>
                        <h5>vMix</h5>
                    </div>
                </div>
            </div>
        </div>
    </Tile>
    <div class="experience">
        <h1 class="table-name">Experience</h1>
        <div class="table-container">
            <div class="table">
                <div class="cell">
                    <h4><u>Event Name</u></h4>
                </div>
                <div class="cell">
                    <h4><u>Role</u></h4>
                </div>
                <div class="cell">
                    <h4><u>Date</u></h4>
                </div>
                <div class="cell">
                    <h4><u>Organiser</u></h4>
                </div>
                <div class="cell">
                    <h4><u>Location</u></h4>
                </div>

                <div class="cell"><p>Saudi Arabia Race Watchalong</p></div>
                <div class="cell"><p>Technical Producer</p></div>
                <div class="cell"><p>Dec 1st → 5th 2021</p></div>
                <div class="cell"><p>McLaren Shadow</p></div>
                <div class="cell"><p>London, UK</p></div>

                <div class="cell"><p>Saudi Arabia Race Watchalong</p></div>
                <div class="cell"><p>Technical Producer</p></div>
                <div class="cell"><p>Dec 1st → 5th 2021</p></div>
                <div class="cell"><p>McLaren Shadow</p></div>
                <div class="cell"><p>Remote</p></div>

                <div class="cell"><p>Stream for Mind</p></div>
                <div class="cell"><p>Technical Producer</p></div>
                <div class="cell"><p>Oct 27th → 28th 2021</p></div>
                <div class="cell"><p>McLaren Shadow</p></div>
                <div class="cell"><p>Woking, UK</p></div>

                <div class="cell"><p>Six Major: Mexico</p></div>
                <div class="cell"><p>GFX OP</p></div>
                <div class="cell"><p>Aug 9th → 22nd 2021</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>Mexico City, MX</p></div>

                <div class="cell"><p>Red Bull: Campus Clutch NA</p></div>
                <div class="cell"><p>GFX OP</p></div>
                <div class="cell"><p>May 28th 2021</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>Remote</p></div>

                <div class="cell"><p>FLASHPOINT 3</p></div>
                <div class="cell"><p>B Stream GFX OP</p></div>
                <div class="cell"><p>May 25th → 27th 2021</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>Remote</p></div>

                <div class="cell"><p>Siege EU League</p></div>
                <div class="cell"><p>GFX OP</p></div>
                <div class="cell"><p>January 15th → 17th 2021</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>Remote</p></div>

                <div class="cell"><p>Siege Invitational EU Qualifier</p></div>
                <div class="cell"><p>GFX OP</p></div>
                <div class="cell"><p>December 17th → 20th 2020</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>Remote</p></div>

                <div class="cell"><p>FLASHPOINT 2</p></div>
                <div class="cell"><p>GFX OP</p></div>
                <div class="cell"><p>November 4th → December 8th 2020</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>London, UK</p></div>

                <div class="cell"><p>Quake Pro League</p></div>
                <div class="cell"><p>In-game Observer</p></div>
                <div class="cell"><p>May → August 2020</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>Remote</p></div>

                <div class="cell"><p>MTA: Arena Nationals</p></div>
                <div class="cell"><p>Technical Operations</p></div>
                <div class="cell"><p>December 20th → 21st 2019</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>London, UK</p></div>

                <div class="cell"><p>Red Bull: Rule the Sphere</p></div>
                <div class="cell"><p>GFX & VT OP</p></div>
                <div class="cell"><p>December 7th → 8th 2019</p></div>
                <div class="cell"><p>EGL</p></div>
                <div class="cell"><p>London, UK</p></div>

                <div class="cell"><p>ECS Season 8 Finals</p></div>
                <div class="cell"><p>GFX OP</p></div>
                <div class="cell"><p>November 26th → December 1st 2019</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>Arlington, TX</p></div>

                <div class="cell"><p>Halo Ignite</p></div>
                <div class="cell"><p>GFX OP</p></div>
                <div class="cell"><p>August 14th → 18th 2019</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>London, UK</p></div>

                <div class="cell"><p>ECS Season 7 Finals</p></div>
                <div class="cell"><p>VT OP</p></div>
                <div class="cell"><p>June 5th → 9th 2019</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>London, UK</p></div>

                <div class="cell"><p>PUBG Global Summit</p></div>
                <div class="cell"><p>VT OP</p></div>
                <div class="cell"><p>April 12th → 21st 2019</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>London, UK</p></div>

                <div class="cell"><p>King the North 2018</p></div>
                <div class="cell"><p>Head of Production</p></div>
                <div class="cell"><p>December 1st → 2nd 2018</p></div>
                <div class="cell"><p>UoM Esports Society</p></div>
                <div class="cell"><p>Manchester, UK</p></div>

                <div class="cell"><p>CS:GO Winter Split</p></div>
                <div class="cell"><p>Producer</p></div>
                <div class="cell"><p>September → December 2018</p></div>
                <div class="cell"><p>The NUEL</p></div>
                <div class="cell"><p>Remote</p></div>

                <div class="cell"><p>Insomnia63</p></div>
                <div class="cell"><p>Producer</p></div>
                <div class="cell"><p>August 24th → 26th 2018</p></div>
                <div class="cell"><p>EssentialsTF</p></div>
                <div class="cell"><p>Birmingham, UK</p></div>

                <div class="cell"><p>Premiership Spring Finals</p></div>
                <div class="cell"><p>CS:GO Observer</p></div>
                <div class="cell"><p>April 14th → 15th 2018</p></div>
                <div class="cell"><p>ESL UK</p></div>
                <div class="cell"><p>Leicester, UK</p></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import anime from 'animejs'
import { defineComponent, onMounted } from 'vue'

import techLogos from '../../assets/tech-logos'

import Tile from '../Tile.vue'

export default defineComponent({
    components: {
        Tile,
    },
    setup() {
        window.addEventListener('load', () => {
            anime({
                targets: '.experience',
                translateY: [200, 0],
                opacity: [0, 1],
                delay: 900,
                duration: 1000,
                easing: 'easeOutCubic',
            })
        })

        return { techLogos }
    },
})
</script>

<style scoped lang="scss">
$margin: min(30px, 3vw);

.experience {
    border-radius: 10px;
    width: calc(100% - #{$margin});
    margin: $margin calc(#{$margin} / 2);
    height: 100%;

    background-color: rgb(243, 243, 243);

    padding: 0;

    opacity: 0;

    .table-name {
        padding: 10px;
        padding-top: 15px;
        background-color: #4995ff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin-bottom: 0px;
        margin-top: 0;
        color: white;
    }

    .table-container {
        overflow-x: scroll;
        margin: 0;

        .table {
            display: flex;
            flex-wrap: wrap;
            margin: 0 0 2em 0;
            padding: 0;

            width: max(100%, 740px);

            .cell {
                text-align: left;
                box-sizing: border-box;
                flex-grow: 1;
                width: 18%;
                padding: 0.8em 0.6em;
                overflow: hidden; // Or flex might break
                list-style: none;
                //border: solid 3px white;
                > h1,
                > h2,
                > h3,
                > h4,
                > h5,
                > h6,
                > p {
                    margin: 0;
                }

                border-bottom: rgb(170, 170, 170) solid 1px;

                &:nth-child(-n + 5) {
                    background-color: #4a84d6;
                    color: white;
                    vertical-align: bottom;
                }

                &:nth-child(5n + 2) {
                    width: 14%;
                }

                &:nth-child(5n + 3) {
                    width: 34%;
                }

                &:nth-child(5n + 4) {
                    width: 14%;
                }
            }
        }
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

    .familiar-tech {
        background: #2f83fa;
        border-radius: 5px;
        padding: 15px;

        margin-bottom: 20px;

        h5 {
            margin-top: 0;
        }

        .tech-logos {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content: space-between;
            margin-bottom: 20px;
            row-gap: 20px;

            > * {
                width: 125px;
                height: 125px;

                h5 {
                    text-align: center;
                    margin-top: 10px;
                }

                .img-container {
                    height: 75%;
                    width: 100%;
                    position: relative;

                    img {
                        max-height: 100%;
                        max-width: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        //transform: translate(-50%, -50%);
                    }
                }
            }
        }
    }
}
</style>
