<template>
  <div class="container">
    <nav id="sideMenu">
      <ul>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li>Works</li>
        <li>Library</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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

  ul {
    list-style: none;
  }
  li {
    margin-bottom: 2rem;
  }
}
</style>
