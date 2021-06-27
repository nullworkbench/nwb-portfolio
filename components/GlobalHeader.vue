<template>
  <header>
    <h1>
      <nuxt-link to="/">
        <img src="/nwb_icon.svg" alt="nullworkbenchのロゴ" />
        <span>nullworkbench</span>
      </nuxt-link>
    </h1>

    <div class="spMenuTrigger">
      <div></div>
      <div></div>
    </div>

    <ul>
      <li><nuxt-link ref="about" to="/about">About</nuxt-link></li>
      <li><nuxt-link ref="works" to="/works">Works</nuxt-link></li>
      <li><nuxt-link ref="library" to="/library">Library</nuxt-link></li>
      <li><nuxt-link ref="blog" to="/blog">Blog</nuxt-link></li>
      <li><nuxt-link ref="contact" to="/contact">Contact</nuxt-link></li>
    </ul>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 90;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0.5rem 1.5rem;

  background: #f9f9f9;
  font-family: 'Comfortaa', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

h1 {
  max-width: 15rem;
  font-size: 1.5rem;
  font-weight: 200;

  a {
    display: flex;
  }
  img {
    display: block;
    width: 1.2rem;
    margin-right: 0.5rem;
  }
  span {
    display: block;
    padding-top: 0.3rem;
  }
}

.spMenuTrigger {
  display: none;
}

ul {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
}
li {
  padding-right: 2rem;

  a {
    display: block;
    line-height: 3rem;
    transition: padding 0.4s;
    &:hover {
      padding: 0 1rem;
    }
  }

  // activeなリンクのスタイルを変更
  .nuxt-link-active {
    font-weight: 600;
  }
}

/* ----- レスポンシブ ----- */
/* スマートフォン */
@media only screen and (max-width: 599px) {
  h1 {
    // 中央に配置
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: none;
    // ロゴの文字削除
    span {
      display: none;
    }
    // ロゴアイコンサイズ変更
    img {
      width: 1.3rem;
      margin: 0;
    }
  }

  // メニューをアコーディオンに
  .spMenuTrigger {
    $spMenuTriggerWidth: 1.2rem;

    display: block;
    position: relative;
    width: $spMenuTriggerWidth;
    margin: auto 0 auto auto;
    padding: 0.8rem 0;

    div {
      width: $spMenuTriggerWidth;
      height: 1px;
      background: #333;

      &:nth-of-type(1) {
        margin-bottom: 0.4rem;
      }
    }
  }

  ul {
    display: none;
  }
}

/* タブレット */
@media only screen and (max-width: 1024px) {
}
</style>
