<template>
  <div class="container">
    <div id="canvas">
      <Canvas />
    </div>
  </div>
</template>

<script>
import Canvas from '@/components/Canvas'

export default {
  components: {
    Canvas,
  },
}
</script>

<style>
.container {
  min-height: 100vh;
}

#canvas {
  width: 100vw;
  height: 100vh;
}
</style>
