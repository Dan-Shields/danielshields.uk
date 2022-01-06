<template>
    <div 
        class="header"
    >
        <h1 
            ref="titleDiv"
            class="title"
        >
            {{ title }}
        </h1>

        <div 
            ref="navbar"
            class="navbar"
        >
            <h1
                v-for="(page, index) in pages"
                :key="page"
                :class="{active: index === currentPage}"
                @click="$emit('go-to-page', index)"
            >
                {{ page }}
            </h1>
        </div> 
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType } from 'vue'

import anime from 'animejs'

export default defineComponent({
    name: 'Header',

    props: {
        title: {
            type: String,
            default: 'Daniel Shields'
        },
        pages: {
            type: Array as PropType<string[]>,
            default: () => [
                'Skills',
                'Projects',
                'Contact'
            ]
        },
        currentPage: {
            type: Number,
            default: 1
        }
    },

    emits: ['go-to-page'],

    setup() {
        const titleDiv = ref(null)
        const navbar = ref(null)

        onMounted( () => {
            anime({
                targets: [titleDiv.value, navbar.value],
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
                delay: anime.stagger(500, { start: 100 }),
            })
        })

        return {
            titleDiv,
            navbar
        }
    }
})
</script>

<style lang="scss" scoped>
$height: 100px;

.header {
  height: $height;
  border-radius: 10px;

  max-width: 100%;
  min-width: 240px;

  margin: auto;
  margin-bottom: 15px;
  vertical-align: middle;
  width: 100%;

  .title {
    margin: 0;
    margin-top: 25px;
    font-size: 42px;
    
    opacity: 0;
  }


  .navbar {
    width: 90%;
    margin: auto;
    position: relative;

    $height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    transform: scale(0);

    > * {
      flex-basis: 33%;
    }

    h1 {
      user-select: none;
      cursor: pointer;

      color: #748291;
      text-decoration: underline;
      margin: 10px 0;
      
      &.active, &:hover {
        color: darken(#2c3e50, 10%);
      }
    }
  }
}
@media only screen and (max-width: 500px) {
  .navbar h1 {
    font-size: 1.5em;
  }
}
@media only screen and (max-width: 375px) {
  .navbar h1 {
    font-size: 1.3em;
  }
}
</style>
