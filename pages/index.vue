<template>
  <div class="container">
    <div id="title">nullworkbench</div>
    <nav id="sideMenu">
      <ul>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/works">Works</nuxt-link></li>
        <li>Library</li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
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
  font-size: 3rem;
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
    margin-bottom: 2rem;
  }
}
</style>
