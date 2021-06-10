<template>
  <div id="container">
    <div id="canvas">
      <Canvas />
    </div>
    <Nuxt />
  </div>
</template>

<script>
import Canvas from '@/components/Canvas'
import EventBus from '@/utils/event-bus'

export default {
  components: {
    Canvas,
  },
  watch: {
    '$route.name'(_new, _old) {
      // _new: 遷移先パス, _old: 遷移元パス
      EventBus.$emit('THREE_PATH_TRANSITION', _new)
    },
  },
  // moutedを書くと、遷移時にthreejsのtransitionがしなくなる
  // mounted() {
  //   EventBus.$emit('THREE_PATH_TRANSITION', this.$route.name)
  // },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  background: #edf2f5;
}

/* ページ遷移アニメーション */
.page-enter,
.page-leave-active {
  opacity: 0;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#container {
  position: relative;
}

#canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
