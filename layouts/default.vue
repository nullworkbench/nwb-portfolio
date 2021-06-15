<template>
  <div id="container">
    <GlobalHeader ref="globalHeader" />
    <div id="canvas">
      <Canvas />
    </div>
    <Nuxt />
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import Canvas from '@/components/Canvas'
import EventBus from '@/utils/event-bus'

export default {
  components: {
    GlobalHeader,
    Canvas,
  },
  watch: {
    '$route.name'(_new, _old) {
      // _new: 遷移先パス, _old: 遷移元パス
      // 球体のアニメーションを実行
      EventBus.$emit('THREE_PATH_TRANSITION', _new)
    },
  },
  mounted() {
    // index以外に直接アクセスした場合に球体の位置を設定
    EventBus.$emit('THREE_PATH_TRANSITION', this.$route.name)
  },
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
  padding: 0;
}

#container {
  min-height: 100vh;
}

#canvas {
  position: fixed;
  z-index: -90;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

/* 各ページのルートエレメント */
.container {
  position: relative;
  min-height: 100vh;
}

/* ----- 共通CSS ----- */
a {
  text-decoration: none;
  color: #000;
}
p {
  margin-bottom: 0.5rem;
}
ul {
  margin: 0.8rem 0;
  list-style-type: none;
}

/* ページタイトル */
h2 {
  /* Font */
  font-family: 'Josefin Sans', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 3rem;
}

/* 共通パーツ */
.emoji {
  padding-right: 0.6rem;
}
</style>
