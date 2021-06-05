<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import CanvasGL from './js/CanvasGL'

export default {
  mounted() {
    // CanvasGL.jsにcanvas要素を渡す
    if (!this.CanvasGL) {
      this.CanvasGL = new CanvasGL({
        $canvas: this.$refs.canvas,
      })
    }
  },
}
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
