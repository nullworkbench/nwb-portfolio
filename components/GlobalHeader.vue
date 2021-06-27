<template>
  <header>
    <h1>
      <nuxt-link to="/">
        <img src="/nwb_icon.svg" alt="nullworkbenchのロゴ" />
        <span>nullworkbench</span>
      </nuxt-link>
    </h1>

    <div ref="spMenuTrigger" class="spMenuTrigger" @click="spMenuOpen">
      <div></div>
      <div></div>
    </div>

    <ul ref="globalMenu">
      <li><nuxt-link ref="about" to="/about">About</nuxt-link></li>
      <li><nuxt-link ref="works" to="/works">Works</nuxt-link></li>
      <li><nuxt-link ref="library" to="/library">Library</nuxt-link></li>
      <li><nuxt-link ref="blog" to="/blog">Blog</nuxt-link></li>
      <li><nuxt-link ref="contact" to="/contact">Contact</nuxt-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      spMenuOpened: false,
    }
  },
  methods: {
    spMenuOpen() {
      if (this.spMenuOpened) {
        this.$refs.globalMenu.classList.remove('show')
        this.$refs.spMenuTrigger.classList.remove('show')
      } else {
        this.$refs.globalMenu.classList.add('show')
        this.$refs.spMenuTrigger.classList.add('show')
      }
      this.spMenuOpened = !this.spMenuOpened
    },
  },
}
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
$easeInCubic: cubic-bezier(0.55, 0.055, 0.675, 0.19);
/* スマートフォン */
@media only screen and (max-width: 599px) {
  header {
    height: 3rem;
  }
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

  // メニューを開くトリガー
  .spMenuTrigger {
    $spMenuTriggerWidth: 1.2rem;

    display: block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: $spMenuTriggerWidth;
    height: 0.6rem;
    margin: auto 0 auto auto;

    div {
      position: absolute;
      right: 0;
      width: $spMenuTriggerWidth;
      height: 1px;
      background: #333;

      transition: transform 0.4s $easeInCubic, top 0.2s, bottom 0.2s;

      &:nth-of-type(1) {
        top: 0;
      }
      &:nth-of-type(2) {
        bottom: 0;
      }
    }

    &.show {
      div {
        top: 50%;
        &:nth-of-type(1) {
          transform: rotateZ(45deg);
        }
        &:nth-of-type(2) {
          transform: rotateZ(-45deg);
        }
      }
    }
  }

  // メニュー
  ul {
    display: block;
    width: 100vw;
    height: 0;
    transition: height 0.4s $easeInCubic, padding 0.4s;
    margin-top: 3rem;
    overflow: hidden;
    background: #f9f9f9;

    li {
      padding: 0;
      opacity: 0;
      transform: translateX(-3rem);
      transition: opacity 0.4s, transform 0.4s;

      @for $i from 0 through 5 {
        &:nth-of-type(#{$i}) {
          transition-delay: 0.1 * $i + s;
        }
      }
    }
  }
  ul.show {
    height: 100vh;
    padding: 2rem;

    li {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

/* タブレット */
@media only screen and (max-width: 1024px) {
}
</style>
