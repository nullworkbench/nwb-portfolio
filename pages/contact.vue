<template>
  <div class="container">
    <h2>Contact</h2>

    <main>
      <section>
        <h3 class="name">Tetta Ueyama<br /><span>( nullworkbench )</span></h3>
        <h3>Email</h3>
        <p class="email">nullworkbench[at]gmail.com</p>
        <p>
          お仕事のご依頼や、ご質問などのお問い合わせはメールにてお伺いいたします。
        </p>
        <p>みなさまのお問い合わせをお待ちしております。</p>
      </section>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  font-family: 'Comfortaa', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 200;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.5);
}

h2 {
  padding-top: 7rem;
  text-align: center;
}

main {
  position: absolute;
  top: 48%;
  transform: translateY(-50%);
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  text-align: center;
}
.name {
  font-size: 2rem;
  line-height: 2rem;
  margin-bottom: 3rem;
}
.name span {
  color: #888;
  font-size: 1.2rem;
}
h3 {
  font-size: 1.3rem;
  font-weight: 100;
  margin-bottom: 1rem;
}
.email {
  font-family: inherit;
  font-size: 1.2rem;
  margin-bottom: 4rem;
}
</style>
