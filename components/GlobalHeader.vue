<template>
  <header>
    <div>
      <h1><nuxt-link to="/">nullworkbench</nuxt-link></h1>

      <ul>
        <li><nuxt-link ref="about" to="/about">About</nuxt-link></li>
        <li><nuxt-link ref="works" to="/works">Works</nuxt-link></li>
        <li><nuxt-link ref="library" to="/library">Library</nuxt-link></li>
        <li><nuxt-link ref="blog" to="/blog">Blog</nuxt-link></li>
        <li><nuxt-link ref="contact" to="/contact">Contact</nuxt-link></li>
      </ul>
    </div>
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
  font-size: 1.5rem;
  font-weight: 200;
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
    line-height: 2.7rem;
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
</style>
