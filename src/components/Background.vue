<!-- TAKEN FROM https://github.com/orthographics/orthographics.uk-->

<template>
    <canvas
        ref="canvas"
        class="absolute top-0 left-0 -z-50 h-full w-full"
    ></canvas>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMouse } from '@vueuse/core'

const canvas = ref<HTMLCanvasElement>()
let ctx: CanvasRenderingContext2D | null

const { x: mouseX, y: mouseY, sourceType } = useMouse({ type: 'client' })

const GAP = 33
const RAD = 2

const WAVE_LENGTH = 1000
const WAVE_SPEED = 0.2
const WAVE_WEIGHT = 1.3 // the wave will multiply dot size in the range 1 -> WAVE_WEIGHT

const MOUSE_WEIGHT = 1.75 // the mouse will multiply dot size in the range 1 -> MOUSE_WEIGHT
const MOUSE_RANGE = 200

function smoothstep(k: number) {
    const kk = Math.min(Math.max(k, 0), 1)
    return 3 * kk ** 2 - 2 * kk ** 3
}

function draw(ts: DOMHighResTimeStamp) {
    if (!canvas.value) return

    canvas.value.width = canvas.value.offsetWidth
    canvas.value.height = canvas.value.offsetHeight

    ctx = canvas.value.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = '#6a469222'

    for (let i = 0; i < canvas.value.height / GAP; i++) {
        const cY = (i + 0.5) * GAP

        // RAD affected by y-axis wave
        const rowSize =
            RAD *
            (WAVE_WEIGHT +
                (1 - WAVE_WEIGHT) *
                    Math.sin(
                        ((2 * Math.PI) / WAVE_LENGTH) * (cY - ts * WAVE_SPEED),
                    ))

        for (let j = 0; j < canvas.value.width / GAP; j++) {
            const cX = (j + 0.5) * GAP

            let size = rowSize

            // Add effect of x-axis wave
            size *=
                WAVE_WEIGHT +
                (1 - WAVE_WEIGHT) *
                    Math.sin(
                        ((2 * Math.PI) / WAVE_LENGTH) * (cX - ts * WAVE_SPEED),
                    )

            const rect = canvas.value.getClientRects()[0]

            if (sourceType.value === 'mouse') {
                const mouseDist = Math.sqrt(
                    (cX - mouseX.value + rect.left) ** 2 +
                        (cY - mouseY.value + rect.top) ** 2,
                )

                // mouse effect
                size *=
                    1 +
                    (MOUSE_WEIGHT - 1) *
                        (1 - smoothstep(mouseDist / MOUSE_RANGE))
            }

            ctx.beginPath()
            ctx.ellipse(cX, cY, size, size, 0, 0, 2 * Math.PI)
            ctx.fill()
        }
    }

    window.requestAnimationFrame(draw)
}

onMounted(() => {
    window.requestAnimationFrame(draw)
})
</script>
