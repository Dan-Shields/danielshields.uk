<template>
  <div class="container">
    <Header />

    <div class="body">
      <Tile
        v-for="(tile, index) in tiles"
        :key="tile.id"
        :width="tile.width"
        :color="tile.colour"
        :title="tile.title"
        :index="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import anime from 'animejs';

import Tile from './components/Tile.vue';
import Header from './components/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    Tile,
    Header
  },
  data () {
    return {
      tiles: [
        {id: '1', title: 'Web Development', colour: '#4643ff', width: '60%'},
        {id: '2', title: 'Broadcast Graphics', colour: '#8e44ad', width: '40%'},
        {id: '3', title: 'GitHub', colour: '#24292e', width: '40%'},
        {id: '4', title: '_title_here_', colour: '#52A316', width: '60%'},
        {id: '5', title: '_title_here_', colour: '#F3B218', width: '60%'},
        {id: '6', title: '_title_here_', colour: '#D46326', width: '40%'},
        {id: '7', title: '_title_here_', colour: '#FF3232', width: '40%'},
        {id: '8', title: '_title_here_', colour: '#39b5e5', width: '60%'},
      ]
    };
  },
  
  mounted () {
    anime({
      targets: '.tile',
      opacity: 1,
      delay: anime.stagger(50, { start: 1250 }),
      duration: 1000,
      easing: 'easeOutQuart'
    });
    anime({
      targets: '.tile',
      scale: 1,
      delay: anime.stagger(50, { start: 1250 }),
      duration: 1500,
      easing: 'easeOutElastic(1, 1)',
    });
  }
});
</script>

<style lang="scss" scoped>
.container {
  width: 600px;
  max-width: 100%;
  margin: auto;
  padding: 20px;

  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  text-align: center;

  overflow: hidden;

  border-radius: 20px;
}

.body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>