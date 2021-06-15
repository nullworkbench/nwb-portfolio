<template>
  <div class="container">
    <h2>Blog</h2>
    <div class="mainWrapper">
      <main>
        <section id="sectionQiita">
          <div v-if="$fetchState.pending">Fetching Qiita Posts...</div>
          <div v-else-if="$fetchState.error">
            An Error Occured When Fetching Qiita Posts.
          </div>
          <div v-else>
            <div v-for="(post, idx) in qiitaPosts" :key="idx" class="qiitaPost">
              <h3>{{ post['title'] }}</h3>
              <p>{{ formatDate(post['created_at']) }}</p>
              <div class="lgtm">LGTM {{ post['likes_count'] }}</div>
              <div class="tags">
                <div v-for="(tag, tagIdx) in post['tags']" :key="tagIdx">
                  {{ tag.name }}
                </div>
              </div>
              <a :href="post['url']" target="_blank"></a>
            </div>
          </div>
        </section>
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
  methods: {
    formatDate(str) {
      const date = new Date(str)
      return (
        date.getFullYear() +
        '年' +
        date.getMonth() +
        '月' +
        date.getDay() +
        '日'
      )
    },
  },
}
</script>

<style lang="scss" scoped>
h2 {
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
}

.mainWrapper {
  padding-top: 13rem;
}
main {
  max-width: 1000px;
  margin: 0 auto;
}

// Qiita
#sectionQiita {
  .qiitaPost {
    position: relative;
    background: #f9f9f9;
    width: 80%;
    max-width: 700px;
    margin: 0 auto;
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 10px #eee;

    > p {
      margin-bottom: 1rem;
    }

    a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  h3 {
    margin-bottom: 0.2rem;
  }

  .lgtm {
    display: inline-block;
    background: #55c500;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 800;
    border-radius: 0.5rem;
    padding: 0.5rem;
    padding-right: 0.6rem;
    margin-right: 0.5rem;
  }
  .tags {
    display: inline-block;
    font-size: 0.8rem;
    > div {
      display: inline-block;
      background: #bde7ef;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      margin-right: 0.5rem;
    }
  }
}
</style>
