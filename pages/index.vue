<template>
  <div class="container">
    <div id="canvas">
      <Canvas />
    </div>
    <nav id="menu">
      <ul>
        <li>About</li>
        <li>Works</li>
        <li>Library</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
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
  position: relative;
  min-height: 100vh;
}

#canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
