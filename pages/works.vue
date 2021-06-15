<template>
  <div class="container">
    <h2>Works</h2>
    <div class="mainWrapper">
      <main>
        <div id="filter">
          <p>Filter</p>
          <button
            v-for="(category, idx) in categories"
            :key="idx"
            :ref="String(category).toLowerCase().replace(/\s+/g, '')"
            class="categoryBtn"
            @click="changeFilter(category)"
          >
            {{ category }}
          </button>
        </div>
        <div id="stage">
          <div v-for="(work, idx) in works" :key="idx" class="item">
            <img :src="'/works/' + work[3]" />
            <h3>{{ work[0] }}</h3>
            <p>{{ work[1] }}</p>
            <p>{{ work[2] }}</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ['All', 'Frontend', 'Native App', 'Camera', 'Graphic'],
      works: [
        ['タイトル', '日付', '説明文', '画像リンク（/works以下）'],
        [
          'iPhoneアプリ「星に願いを。」',
          '2021/04/12',
          '夜空を見上げ、リアルタイムに願い事を共有できるアプリ。',
          'WishUponAStar.png',
        ],
      ],
    }
  },
  mounted() {
    const category = this.$route.query.category
    if (category) {
      this.$refs[category][0].classList.add('active')
    } else {
      this.$refs.all[0].classList.add('active')
    }
  },
  methods: {
    changeFilter(str) {
      // categoryNameを小文字に変換する
      const category = String(str).toLowerCase().replace(/\s+/g, '')
      // 選択済みのカテゴリーを解除する
      const filterElm = document.getElementById('filter')
      const old = filterElm.getElementsByClassName('active')[0]
      if (old) old.classList.remove('active')
      // 新しく選択する
      const btn = this.$refs[category][0]
      btn.classList.add('active')
      // クエリパラメータを設定
      this.$router.push({ path: '/works/?category=' + category })
    },
  },
}
</script>

<style lang="scss" scoped>
.mainWrapepr {
  padding-top: 5rem;
}
main {
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 2rem;
}

#filter {
  font-family: 'Comfortaa', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  margin-left: 2rem;
  margin-bottom: 4rem;

  .categoryBtn {
    width: max-content;
    background: #f9f9f99a;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    margin-right: 1rem;

    &.active {
      background: #f9f9f9;
    }
  }
}

#stage {
  .item {
    width: 30%;
    background: #f9f9f9;

    img {
      display: block;
      width: 90%;
      border-radius: 1rem;
    }
  }
}
</style>
