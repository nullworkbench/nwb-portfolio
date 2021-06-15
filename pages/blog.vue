<template>
  <div class="container">
    <h2>Blog</h2>
    <div class="mainWrapper">
      <main>
        <div v-if="$fetchState.pending">Fetching Qiita Posts...</div>
        <div v-else-if="$fetchState.error">
          An Error Occured When Fetching Qiita Posts.
        </div>
        <div v-else>
          <h3>{{ qiitaPosts[0]['title'] }}</h3>
          <p>{{ qiitaPosts[0]['url'] }}</p>
          <p>{{ qiitaPosts[0]['likes_count'] }}</p>
          <p>{{ qiitaPosts[0]['tags'] }}</p>
          <p>{{ qiitaPosts[0]['created_at'] }}</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qiitaPosts: [],
    }
  },
  async fetch() {
    // QiitaAPIを叩く
    const url = 'https://qiita.com/api/v2/authenticated_user/items'
    this.qiitaPosts = await this.$axios.$get(url, {
      headers: {
        Authorization: 'Bearer ' + process.env.QIITA_API_TOKEN || '',
      },
    })
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
h2 {
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>
