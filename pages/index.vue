<template>
  <div class="container">
    <div id="title">
      <h2>nullworkbench</h2>
      <p>"beginning from _"</p>
    </div>

    <div id="sphereContent">
      <div ref="sphereContentInner" class="inner">
        <span class="heading">{{ sphereContents[sphereContentIdx][0] }}</span>
        <p>{{ sphereContents[sphereContentIdx][1] }}</p>
        <p>click to continue</p>
      </div>
    </div>

    <nav id="sideMenu">
      <ul>
        <li
          v-for="(menu, idx) in menus"
          :key="idx"
          @mouseover="showContent(idx)"
          @mouseout="hideContent(idx)"
        >
          <nuxt-link :to="menu.toLowerCase()" class="menulink">{{
            menu
          }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: ['About', 'Works', 'Library', 'Blog', 'Contact'],
      sphereContents: [
        ['About Me', 'All About nullworkbench.'],
        ['My Works', 'Be a Professional.'],
        ['Library', 'Beautiful Scenes.'],
        ['Blog', 'Logs of Learning.'],
        ['Contact', 'Stay in Touch.'],
      ],
      sphereContentIdx: 0,
    }
  },
  methods: {
    showContent(idx) {
      if (this.$device.isDesktop) {
        this.sphereContentIdx = idx
        document.getElementById('sphereContent').classList.add('show')

        // ホバーしているもの以外の文字色を薄くする
        const menulinks = document.getElementsByClassName('menulink')
        for (let i = 0; i < menulinks.length; i++) {
          if (i !== idx) menulinks[i].style.color = '#ddd'
        }
      }
    },
    hideContent(idx) {
      if (this.$device.isDesktop) {
        document.getElementById('sphereContent').classList.remove('show')

        // 薄くした文字色を戻す
        const menulinks = document.getElementsByClassName('menulink')
        for (let i = 0; i < menulinks.length; i++) {
          menulinks[i].style.color = '#333'
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  /* Font */
  font-family: 'Josefin Sans', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 200;
  font-size: 2rem;
}
#title {
  /* position */
  position: absolute;
  top: 50%;
  left: 0;
  width: 33%;
  height: max-content;
  transform: translateY(-50%);

  text-align: right;
  h2 {
    font-size: 3rem;
    font-weight: 100;
    margin-bottom: 0.2rem;
  }
  p {
    font-size: 1.5rem;
  }
}

#sphereContent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.7);

  // font
  font-family: 'Comfortaa', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  text-align: center;

  // animation
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.4s, opacity 0.4s;
  &.show {
    visibility: visible;
    opacity: 1;

    .inner {
      height: 13rem;
    }
  }

  .inner {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 0;
    transition: height 0.4s;

    text-align: center;
  }
  .heading {
    position: absolute;
    top: 0;
    width: 100%;
    display: block;
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 5rem;
  }
  p {
    position: absolute;
    width: 100%;
    font-weight: 200;

    &:nth-of-type(1) {
      top: 35%;
      font-size: 1.5rem;
    }
    &:nth-of-type(2) {
      bottom: 0;
      font-size: 1rem;
    }
  }
}

#sideMenu {
  /* position */
  position: absolute;
  top: 50%;
  right: 0;
  width: 33%;
  height: max-content;
  transform: translateY(-50%);

  ul {
    list-style: none;
  }
  li {
    max-width: max-content;
    margin-bottom: 2rem;
  }
  .menulink {
    position: relative;
    padding: 0.5rem 0;
    padding-right: 2rem;
    transition: padding-left 0.4s, color 0.4s;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0.5rem;
      width: 0;
      height: 1px;
      background: #333;
      transition: width 0.4s;
    }

    &:hover {
      padding-left: 1rem;

      &::after {
        width: 130%;
      }
    }
  }
}

/* ----- レスポンシブ ----- */
/* スマートフォン */
@media only screen and (max-width: 599px) {
  #title {
    position: relative;
    width: 100%;
    transform: none;
    padding-top: 18vh;
    text-align: center;

    h2 {
      font-size: 12vw;
    }
    p {
      font-size: 6vw;
    }
  }
  #sideMenu {
    top: unset;
    bottom: 0;
    width: 100%;
    transform: none;

    // font
    font-size: 1.3rem;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0;

      li {
        width: 100%;
        max-width: none;
        margin-bottom: 1.5rem;
      }
      .menulink {
        display: block;
        width: max-content;
        margin: 0 auto;
        padding: 0;
      }
    }
  }
}
/* 縦長じゃないアス比用 */
@media only screen and (max-height: 800px) {
  #title {
    padding-top: 15vh;
  }
  #sideMenu {
    margin-top: 34vh;
  }
}
/* タブレット */
@media only screen and (max-width: 1024px) {
}
</style>
