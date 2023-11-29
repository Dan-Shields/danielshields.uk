<template>
    <a
        ref="tile"
        class="w-full max-w-full sm:p-2 p-1 box-border block"
        :href="link ?? undefined"
        :target="link ? '_blank' : undefined"
    >
        <div
            ref="box"
            class="w-full h-full box-border flex flex-col items-center justify-center cursor-pointer rounded-xl relative"
            :style="boxStyle"
            @mouseover="updateHover(true)"
            @mouseout="updateHover(false)"
            @click="updateHover(false)"
        >
            <slot />
        </div>
    </a>
</template>

<script lang="ts" setup>
import { ref, watch, type PropType } from 'vue'

import anime from 'animejs'

const lightenDarkenColor = function (col: string, amt: number) {
    var usePound = false

    if (col[0] == '#') {
        col = col.slice(1)
        usePound = true
    }

    var num = parseInt(col, 16)

    var r = (num >> 16) + amt

    if (r > 255) r = 255
    else if (r < 0) r = 0

    var b = ((num >> 8) & 0x00ff) + amt

    if (b > 255) b = 255
    else if (b < 0) b = 0

    var g = (num & 0x0000ff) + amt

    if (g > 255) g = 255
    else if (g < 0) g = 0

    return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

const props = defineProps({
    color: {
        type: String,
        default: '#4643ff',
    },
    link: {
        type: String,
        default: null,
    },
    bgImage: {
        type: Object as PropType<ImageMetadata>,
        default: null,
    },
    interactive: {
        type: Boolean,
        default: true,
    },
    hideTitle: {
        type: Boolean,
        default: false,
    },
    borderColor: {
        type: String,
        default: '',
    },
})

let boxStyle = ref({
    background: props.bgImage
        ? `url("${props.bgImage.src}") center/cover no-repeat`
        : 'linear-gradient(to bottom right, ' +
          props.color +
          ', ' +
          lightenDarkenColor(props.color, 50) +
          ')',
    cursor: props.interactive ? 'pointer' : 'unset',
    border: props.borderColor ? `1px solid ${props.borderColor}` : '',
})

const tile = ref<HTMLElement>()
const hover = ref(false)

const updateHover = (value: boolean) => {
    hover.value = value
}

const box = ref<HTMLElement>()

watch(hover, (newHover) => {
    if (!props.interactive) return

    anime({
        targets: box.value,
        scale: newHover ? 1.1 : 1,
        duration: 500,
        easing: 'easeOutElastic(1, 0.7)',
    })
})
</script>
