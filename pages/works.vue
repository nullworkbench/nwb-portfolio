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
        <div id="stage" ref="stage">
          <div v-for="(work, idx) in works" :key="idx" class="item">
            <div class="itemInner">
              <img :src="'/works/' + work[3]" />
              <div class="hover">
                <h3>{{ work[0] }}</h3>
                <p>{{ work[1] }}</p>
                <p>{{ work[2] }}</p>
              </div>
            </div>
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
          'iPhoneアプリ\n「星に願いを。」',
          '2021/04/12',
          '夜空を見上げ、リアルタイムに願い事を共有できるアプリ。',
          'WishUponAStar.png',
        ],
      ],
    }
  },
  mounted() {
    this.setFilter()
    this.arrangeItems()
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
    arrangeItems() {
      const stageElm = this.$refs.stage
      const items = document.getElementsByClassName('item')

      const positions = []

      for (const item of items) {
        const width = this.generateRandom(20, 25)
        let x = this.generateRandom(
          0,
          stageElm.clientWidth - stageElm.clientWidth * (width / 100)
        )
        let y = this.generateRandom(
          0,
          stageElm.clientHeight - stageElm.clientWidth * (width / 100)
        )

        // 被らないように
        for (let i = 0; i < positions.length; i++) {
          const itemRadius = stageElm.clientWidth * (width / 100)
          // x
          while (
            x > positions[i].x - itemRadius &&
            x < positions[i].x + itemRadius
          ) {
            x = this.generateRandom(
              0,
              stageElm.clientWidth - stageElm.clientWidth * (width / 100)
            )
          }
          // y
          while (
            y > positions[i].y + itemRadius &&
            y < positions[i].y - itemRadius
          ) {
            y = this.generateRandom(
              0,
              stageElm.clientHeight - stageElm.clientWidth * (width / 100)
            )
          }
        }

        positions.push({ x, y, width })

        // style設定
        item.style.left = x + 'px'
        item.style.top = y + 'px'
        item.style.width = width + '%'
      }
    },
    generateRandom(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
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
  height: 75vh;

  .item {
    cursor: pointer;
    position: absolute;
    width: 30%;
    border-radius: 50%;
    overflow: hidden;
  }
  .itemInner {
    position: relative;
    z-index: 10;
    width: 100%;
    padding-bottom: 100%;

    // 丸っこく見せるための内側のshadow
    &::after {
      content: '';
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      box-shadow: 0 0 2vw #e6e6e6 inset;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
    }

    .hover {
      // position
      position: absolute;
      z-index: 11;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      padding: 25% 2rem;
      // font
      color: #fff;
      text-align: center;
      // animation
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.4s, visibility 0.4s;

      h3 {
        white-space: pre-wrap;
        font-size: 1.4em;
      }
      p {
        margin-top: 5%;
      }
    }

    &:hover .hover {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
