
<template>
    <Tile
        width="100%"
        :color="'#2781FF'"
        :title="'test'"
        :index="0"
        :interactive="false"
        class="animate-in"
        style="color: white"
    >
        <div class="header">
            <div style="flex-basis: 1; width: 40%">
                <h5>Suitable Roles</h5>
                <ul>
                    <li>Graphics Operator</li>
                    <li>VT Operator</li>
                    <li>Technical Support</li>
                </ul>
            </div>

            <div style="flex-basis: 1; width: 40%">
                <h5>Familiar Technologies</h5>
                <ul>
                    <li>OBS/VMix</li>
                    <li>CasparCG</li>
                    <li>Xpression</li>
                </ul>
            </div>
        </div>
    </Tile>
    <div class="experience">
        <h1 class="table-name">
            Experience
        </h1>
        <div class="table-container">
            <div class="table">
                <div class="cell"><h4><u>Event Name</u></h4></div>
                <div class="cell"><h4><u>Role</u></h4></div>
                <div class="cell"><h4><u>Date</u></h4></div>
                <div class="cell"><h4><u>Organiser</u></h4></div>
                <div class="cell"><h4><u>Location</u></h4></div>
    
                <div class="cell"><p>Red Bull: Campus Clutch NA</p></div>
                <div class="cell"><p>GFX Op</p></div>
                <div class="cell"><p>May 28th 2021</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>Remote</p></div>
    
                <div class="cell"><p>FLASHPOINT 3</p></div>
                <div class="cell"><p>B Stream GFX OP</p></div>
                <div class="cell"><p>May 25th → 27th 2021</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>Remote</p></div>
    
                <div class="cell"><p>Siege EU League</p></div>
                <div class="cell"><p>GFX Op</p></div>
                <div class="cell"><p>January 15th → 17th 2021</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>Remote</p></div>
    
                <div class="cell"><p>Siege Invitational EU Qualifier</p></div>
                <div class="cell"><p>GFX Op</p></div>
                <div class="cell"><p>December 17th → 20th 2020</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>Remote</p></div>
    
                <div class="cell"><p>FLASHPOINT 2</p></div>
                <div class="cell"><p>GFX Op</p></div>
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
                <div class="cell"><p>GFX & VT Op</p></div>
                <div class="cell"><p>December 7th → 8th 2019</p></div>
                <div class="cell"><p>EGL</p></div>
                <div class="cell"><p>London, UK</p></div>
    
                <div class="cell"><p>ECS Season 8 Finals</p></div>
                <div class="cell"><p>GFX Op</p></div>
                <div class="cell"><p>November 26th → December 1st 2019</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>Arlington, TX</p></div>
    
                <div class="cell"><p>Halo Ignite</p></div>
                <div class="cell"><p>GFX Op</p></div>
                <div class="cell"><p>August 14th → 18th 2019</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>London, UK</p></div>
    
                <div class="cell"><p>ECS Season 7 Finals</p></div>
                <div class="cell"><p>VT Op</p></div>
                <div class="cell"><p>June 5th → 9th 2019</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>London, UK</p></div>
    
                <div class="cell"><p>PUBG Global Summit</p></div>
                <div class="cell"><p>VT Op</p></div>
                <div class="cell"><p>April 12th → 21st 2019</p></div>
                <div class="cell"><p>FACEIT</p></div>
                <div class="cell"><p>London, UK</p></div>
    
                <div class="cell"><p>King the North 2018</p></div>
                <div class="cell"><p>Head of Production</p></div>
                <div class="cell"><p>December 1st → 2nd 2018</p></div>
                <div class="cell"><p>UoM Esports Society</p></div>
                <div class="cell"><p>Manchester, UK</p></div>
    
                <div class="cell"><p>Insomnia63</p></div>
                <div class="cell"><p>Technical Director</p></div>
                <div class="cell"><p>August 24th → 26th 2018</p></div>
                <div class="cell"><p>EssentialsTF</p></div>
                <div class="cell"><p>Birmingham, UK</p></div>
    
                <div class="cell"><p>Premiership Spring Finals</p></div>
                <div class="cell"><p>CS:GO Observer</p></div>
                <div class="cell"><p>April 14th → 15th 2018</p></div>
                <div class="cell"><p>ESL</p></div>
                <div class="cell"><p>Leicester, UK</p></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import anime from 'animejs'
import { defineComponent, onMounted } from 'vue'

import Tile from '../Tile.vue'

export default defineComponent({
    components: {
        Tile
    },
    setup () {
        onMounted(() => {
            anime({
                targets: '.experience',
                translateY: [200, 0],
                opacity: [0, 1],
                delay: 900,
                duration: 1000,
                easing: 'easeOutCubic'
            })
        })

        return {}
    }
})
</script>

<style scoped lang="scss">

$margin: min(30px, 3vw);

.experience {
    //box-shadow: 10px 10px 15px 0px rgba(59, 59, 59, 0.336);
    border-radius: 10px;
    width: calc(100% - #{$margin});
    margin: 0 calc(#{$margin} / 2);
    height: 100%;

    background-color: rgb(243, 243, 243);

    padding: 0;

    margin-bottom: 50px;

    opacity: 0;
}

.table-name {
    padding: 10px;
    background-color: rgb(130, 148, 167);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 0px;
    margin-top: 0;
    color: white;
}

.table-container {
    overflow-x: scroll;
    margin: 0; 
}

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
        > h1, > h2, > h3, > h4, > h5, > h6, > p { margin: 0; }

        border-bottom: rgb(170, 170, 170) solid 1px;

        &:nth-child(-n+5) {
            background-color: rgb(87, 110, 133);
            color: white;
            vertical-align: bottom;
        }

        &:nth-child(5n+2) {
            width: 14%;
        }

        &:nth-child(5n+3) {
            width: 34%;
        }

        &:nth-child(5n+4) {
            width: 14%;
        }
    }
}

.divider {
    width: 1px;
    margin: 6px 0;
    background: white;
}

.header {
    display: flex;
    width: 100%;
    justify-content: space-around;
    text-align: left;

    h5 {
        //text-align: center;
    }
}
</style>
