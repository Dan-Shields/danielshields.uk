<template>
    <div class="header">
        <h1 ref="titleDiv" class="title">
            {{ props.title }}
        </h1>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import anime from 'animejs'

const props = defineProps({
    title: {
        type: String,
        default: 'Daniel Shields',
    },
})

const titleDiv = ref(null)

onMounted(() => {
    anime({
        targets: [titleDiv.value],
        opacity: {
            value: [0, 1],
            duration: 1000,
            easing: 'easeOutQuart',
        },
        scale: {
            value: [0, 1],
            duration: 1500,
            easing: 'easeOutElastic(1, 1)',
        },
    })
})
</script>

<style lang="scss" scoped>
$height: 50px;

.header {
    height: $height;
    border-radius: 10px;

    max-width: 100%;
    min-width: 240px;

    margin: auto;
    vertical-align: middle;
    width: 100%;

    .title {
        margin: 0;
        margin-top: 25px;
        font-size: 42px;

        opacity: 0;
    }
}
</style>
