<template>
  <div class="container">
    <div id="canvas">
      <Canvas />
    </div>
    <nav id="sideMenu">
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

#sideMenu {
  /* position */
  position: absolute;
  top: 50%;
  right: 0;
  width: 35%;
  height: max-content;
  transform: translateY(-50%);

  /* Font */
  font-family: 'Josefin Sans', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 200;
  font-size: 2rem;
}
</style>
