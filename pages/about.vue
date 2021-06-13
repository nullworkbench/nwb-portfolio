<template>
  <div class="container">
    <!-- ページタイトル -->
    <h2>About</h2>

    <!-- コンテンツ -->
    <main>
      <!-- Profile -->
      <section>
        <h3>Profile</h3>
        <ul>
          <li><span class="emoji">&#x1f476;&#x1f3fb;</span>2001年生まれ</li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
h2 {
  // position
  position: absolute;
  top: 50%;
  left: 12%;
  transform: translateY(-50%);
}

main {
  position: relative;
  width: 70%;
  margin: auto 0 0 auto;
  padding: 3rem;
}
</style>
