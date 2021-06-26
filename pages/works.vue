<template>
  <div class="container">
    <h2>Works</h2>
    <div class="mainWrapper">
      <main ref="main">
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
        <!-- works表示 -->
        <div id="stage" ref="stage">
          <div
            v-for="(work, idx) in works"
            :key="idx"
            class="item"
            @click="showItem(idx)"
          >
            <Work :data="work" />
            <img class="workImg" :src="'/works/' + work.imgPath" />
          </div>
        </div>
        <!-- workを全画面表示する場合 -->
        <div id="workPage" ref="workPage">
          <div class="workPageWrapper">
            <div class="contentHeroImg">
              <img
                :src="'/works/' + works[currentContentIdx].id + '.png'"
                alt=""
              />
            </div>
            <div ref="workPage__content" class="content">
              <component :is="works[currentContentIdx].id"></component>
            </div>
            <!-- <div class="carousel">
              <div v-for="(work, idx) in works" :key="idx">
                <img :src="'/works/' + work[3]" />
              </div>
            </div> -->
          </div>
          <div class="closeBtn" @click="hideItem"></div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Work from '@/components/Parts/Works/work.vue'
import wishuponastar from '@/components/Parts/Works/Pages/wishuponastar.vue'
import zuitei from '@/components/Parts/Works/Pages/zuitei.vue'
import syoryu from '@/components/Parts/Works/Pages/syoryu.vue'
import more from '@/components/Parts/Works/Pages/more.vue'
import hanamura from '@/components/Parts/Works/Pages/hanamura.vue'

const sleep = (sec) => new Promise((resolve) => setTimeout(resolve, sec * 1000))

export default {
  components: {
    Work,
    wishuponastar,
    zuitei,
    syoryu,
    more,
    hanamura,
  },
  data() {
    return {
      categories: ['All', 'Frontend', 'Native App', 'Camera', 'Graphic'],
      works: [
        // ('workId','タイトル', '日付', '画像リンク（/works以下）', 'カテゴリー[]'),
        new WorkItem(
          'wishuponastar',
          'iPhoneアプリ\n「星に願いを。」',
          '2021/04/12',
          'wishuponastar_thumbnail.png'
        ),
        new WorkItem(
          'zuitei',
          '懐石料亭 瑞亭様',
          '2019/04/25',
          'zuitei_thumbnail.png'
        ),
        new WorkItem(
          'syoryu',
          '有限会社 松隆様',
          '2020/04/17',
          'syoryu_thumbnail.png'
        ),
        new WorkItem('more', 'More様', '2020/09/04', 'more_thumbnail.png'),
        new WorkItem(
          'hanamura',
          '花むら様',
          '2021/05/11',
          'hanamura_thumbnail.png'
        ),
      ],
      currentContentIdx: 0,
    }
  },
  mounted() {
    // this.setFilter()
    // queryでitemが指定されていれば表示する
    if (this.$route.query.wid) {
      const specifiedIdx = this.works.findIndex(
        (v) => v.id === this.$route.query.wid
      )
      this.showItem(specifiedIdx)
    }
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
      // パラメータ設定
      this.$router.push({ path: '', query: { wid: this.works[idx].id } })
      // current切り替え
      this.currentContentIdx = idx
      // #workPage表示
      this.$refs.workPage.classList.add('show')
      // workImg表示
      const workImg = document.getElementsByClassName('workImg')[idx]
      workImg.classList.add('show')

      // 何行目か計算
      const row = (function (num) {
        let count = 0
        while (num > 3) {
          num = num / 3
          count++
        }
        return count
      })(idx)

      // 画像位置設定
      workImg.style.top = 20 - 100 * row + '%'
      workImg.style.left = 0 - 100 * (idx % 4) + '%'
    },
    async hideItem(idx) {
      // #workPage表示
      this.$refs.workPage.classList.remove('show')
      // workImg表示
      const workImg = document.getElementsByClassName('workImg')
      const target = workImg[this.currentContentIdx]
      target.style.top = 0 + '%'
      target.style.left = 0 + '%'

      // workPageスクロールリセット
      await sleep(1)
      this.$refs.workPage__content.scrollTo(0, 0)
    },
  },
}

// work
class WorkItem {
  constructor(id, title, date, imgPath) {
    this.id = id
    this.title = title
    this.date = date
    this.imgPath = imgPath
  }
}
</script>

<style lang="scss" scoped>
h2 {
  padding-top: 8rem;
  margin-bottom: 5rem;
  text-align: center;
}

.mainWrapepr {
  padding-top: 5rem;
}
main {
  width: 85%;
  max-width: 1200px;
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
  display: flex;
  flex-wrap: wrap;

  .item {
    cursor: pointer;
    width: 25%;
    // overflow: hidden;
    border: solid 1px #fff;
  }
}

// workの全画面表示
#stage .item > img {
  display: block;
  position: relative;
  z-index: 22;
  top: 0%;
  left: 0%;
  width: 100%;
  margin-top: -100%;
  visibility: hidden;

  // animation
  transition: top 0.8s, left 0.8s, transform 0.8s;

  &.show {
    visibility: visible;
    z-index: 21;
    animation-name: workImgAnim;
    animation-duration: 0.8s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
  }
}
#workPage {
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #111;
  }

  // animation
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.4s, visibility 0.4s;
}
#workPage.show {
  visibility: visible;
  opacity: 1;
}
#workPage .workPageWrapper {
  display: flex;
  position: relative;
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 7rem;
}

#workPage .contentHeroImg {
  position: relative;
  width: 30%;
  top: 50vh;
  transform: translateY(-50%);
  img {
    position: relative;
    display: block;
    width: 100%;
  }
}
#workPage.show {
  .contentHeroImg,
  .content {
    opacity: 0;
    animation-name: fadeIn;
    animation-delay: 0.8s;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  }
}
#workPage .content {
  width: 60%;
  height: calc(100vh - 7rem);
  margin: 0 0 0 auto;
  color: #fff;
  font-weight: 400;
  overflow: scroll;
}

// #workPage .carousel {
//   overflow: scroll;
//   position: relative;
//   z-index: 21;
//   width: 20%;
//   height: 94vh;
//   margin-left: 5%;

//   img {
//     display: block;
//     width: 100%;
//   }
// }

// バツボタン
#workPage .closeBtn {
  position: absolute;
  width: 3rem;
  height: 3rem;
  top: 8%;
  left: 93%;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 3rem;
    height: 1.5px;
    background: #fff;
  }
  &::before {
    transform: rotateZ(-45deg);
  }
  &::after {
    transform: rotateZ(45deg);
  }
}

@keyframes workImgAnim {
  0% {
    opacity: 1;
    transform: scale(1) rotateY(0);
  }
  50% {
    transform: scale(2) rotateY(-360deg);
  }
  98% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1) rotateY(-360 * 2 + deg);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
