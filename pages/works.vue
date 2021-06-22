<template>
  <div class="container">
    <h2>Works</h2>
    <div class="mainWrapper">
      <main>
        <!-- <div id="filter">
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
        </div> -->
        <div id="stage" ref="stage">
          <div v-for="(work, idx) in works" :key="idx" class="item">
            <Work :data="work" />
          </div>
          <!-- <div
            v-for="(work, idx) in works"
            :key="idx"
            class="item"
            @click="showItem(work[0])"
          >
            <div class="itemInner">
              <img :src="'/works/' + work[3]" />
              <div class="hover">
                <div>
                  <h3>{{ work[1] }}</h3>
                  <p>{{ work[2] }}</p>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Work from '@/components/Parts/Works/work.vue'

export default {
  components: {
    Work,
  },
  data() {
    return {
      categories: ['All', 'Frontend', 'Native App', 'Camera', 'Graphic'],
      works: [
        // ['id','タイトル', '日付', '画像リンク（/works以下）', 'カテゴリー[]'],
        [
          'wishuponastar',
          'iPhoneアプリ\n「星に願いを。」',
          '2021/04/12',
          'WishUponAStar.png',
          [2],
        ],
        ['zuitei', '懐石料亭 瑞亭様', '2019/04/25', 'zuitei_thumbnail.png'],
        ['syoryu', '有限会社 松隆様', '2020/04/17', 'syoryu_thumbnail.png'],
        ['more', 'More様', '2020/09/04', 'more_thumbnail.png'],
        ['hanamura', '花むら様', '2021/05/11', 'hanamura_thumbnail.png'],
      ],
    }
  },
  mounted() {
    // this.setFilter()
  },
  methods: {
    setFilter() {
      const category = this.$route.query.category
      if (category) {
        this.$refs[category][0].classList.add('active')
      } else {
        this.$refs.all[0].classList.add('active')
      }
    },
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
    showItem(idx) {
      console.log(idx)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
}
h2 {
  margin-top: 8rem;
  margin-bottom: 5rem;
  text-align: center;
}

.mainWrapepr {
  padding-top: 5rem;
}
main {
  width: 85%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 2rem;
  //   background: #f9f9f9a4;
}

#filter {
  font-family: 'Comfortaa', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  margin-left: 2rem;
  margin-bottom: 4rem;

  .categoryBtn {
    cursor: pointer;
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
  position: relative;
  display: flex;
  flex-wrap: wrap;

  .item {
    cursor: pointer;
    width: 25%;
    overflow: hidden;
    // margin: 2rem;
    // border-radius: 5%;
    border: solid 1px #fff;
  }
}
</style>
