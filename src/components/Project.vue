<template>
    <div
        class="sm:p-5 p-0 box-border bg-no-repeat bg-right sm:aspect-[5/2] text-left rounded-xl project flex flex-wrap bg-contain"
        :class="{
            'bg-right': !textRight,
            'bg-left': textRight,
            'sm:flex-row-reverse': textRight,
        }"
        :style="{
            backgroundImage: bgImage
                ? `linear-gradient(to ${
                      textRight ? 'left' : 'right'
                  }, ${color} 45%, transparent 65%), url(${bgImage})`
                : 'none',
            backgroundColor: color,
        }"
    >
        <div
            class="w-full basis-full shrink-0 sm:hidden relative max-h-[320px] overflow-hidden rounded-xl"
            :class="{
                hidden: !bgImage,
            }"
        >
            <img
                :src="image"
                class="m-auto absolute max-w-[90%] max-h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dropshadow"
            />
            <img :src="bgImage" class="w-full" />
        </div>
        <div
            class="space-y-2 w-full sm:p-0 p-4"
            :class="{
                'sm:w-1/2': !!bgImage,
            }"
        >
            <slot />
        </div>
        <div class="sm:w-1/2 hidden sm:block relative">
            <img
                :src="image"
                class="w-full m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dropshadow"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    color: {
        type: String,
        default: 'white',
    },
    image: {
        type: String,
        default: '',
    },
    bgImage: {
        type: String,
        default: '',
    },
    textRight: {
        type: Boolean,
        default: false,
    },
})
</script>

<style lang="scss">
@media (max-width: 639px) {
    .project {
        background-image: none !important;
        background: v-bind(color) !important;
    }
}

.dropshadow {
    filter: drop-shadow(0 10px 8px rgb(0, 0, 0, 0.5))
        drop-shadow(0 4px 3px rgb(0, 0, 0, 0.5));
}
</style>
