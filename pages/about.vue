<template>
  <div class="container">
    <!-- ページタイトル -->
    <h2>About</h2>

    <!-- コンテンツ -->
    <div class="mainWrapper">
      <main>
        <!-- Profile -->
        <section id="sectionProfile">
          <h3>Profile</h3>
          <ul class="basicInfo">
            <li>Tetta Ueyama <span class="sub">( nullworkbench )</span></li>
            <li>
              <span class="emoji">&#x1f389;</span>Date of birth:
              <span>December 7, 2001</span>
            </li>
            <li>
              <span class="emoji">&#x1f393;</span>University:
              <span> 専修大学 ネットワーク情報学部 就学中 </span>
            </li>
            <li>
              <span class="emoji">&#x1f4e7;</span>Email:
              <span>nullworkbench[at]gmail.com</span>
            </li>
          </ul>
          <div>
            <p>
              小学生時、演劇クラブの台本をWordで作成したのが初めての制作活動。中学生でHTML/CSSに出会い、自分の自己紹介サイトなどを作り始める。
            </p>
            <p>
              高校生時に友人のアルバイト先からWebサイト制作を依頼され、初めて仕事として受注、納品。
            </p>
            <p>
              その後はWebサイトをお持ちでない商店へ営業をするなどし、2020年に「個人事業主
              nullworkbench」として開業。Webコーディングと同じく趣味としていたカメラを扱う技術を組み合わせ、写真、動画撮影も事業に追加。
            </p>
            <p>
              質の高いものを目指すだけでなく、全ての人にインターネットを通じた情報発信の場を利用していただくため、Webサイトに限らず様々な方法でお客様のご期待や、費用対効果にお応えできるようコンサルティングさせていただきます！
            </p>
          </div>
          <!-- accounts -->
          <!-- <div class="accounts">
            <div class="github account">
              <img src="/icons/github.svg" alt="" />
            </div>
            <div class="qiita account">
              <img src="/icons/qiitan.svg" alt="" />
            </div>
          </div> -->
        </section>

        <!-- Skills -->
        <section id="sectionSkills">
          <h3>Skills</h3>
          <ul>
            <!-- Frontend -->
            <li>
              <Skill
                :data="[
                  'Frontend',
                  ['HTML', 'CSS', 'JavaScript', 'Nuxt.js'],
                  2017,
                ]"
              />
            </li>
            <!-- Native App -->
            <li>
              <Skill :data="['Native App', ['Swift'], 2020]" />
            </li>
            <!-- Camera -->
            <li>
              <Skill
                :data="[
                  'Camera',
                  ['Photograph', 'Video shooting', 'Nikon', 'SONY'],
                  2016,
                ]"
              />
            </li>
            <!-- Adobe -->
            <li>
              <Skill
                :data="[
                  'Graphic',
                  ['Illustrator', 'Photoshop', 'AfterEffects', 'Premiere'],
                  2017,
                ]"
              />
            </li>
          </ul>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import Skill from '~/components/Parts/About/Skill.vue'
export default {
  components: {
    Skill,
  },
  data() {
    return {
      now: new Date(),
    }
  },
}
</script>

<style lang="scss" scoped>
h2 {
  // position
  position: fixed;
  top: 50%;
  left: 12%;
  transform: translateY(-50%);
}

.mainWrapper {
  padding-top: 4rem;
}
main {
  position: relative;
  width: 65%;
  margin: 0 0 0 auto;
  padding: 3rem;
  background: #f9f9f9;
}

section {
  margin-bottom: 5rem;
}

h3 {
  font-family: 'Comfortaa', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.8rem;
  letter-spacing: 0.15rem;
  font-weight: 200;
  position: relative;
  margin-bottom: 3rem;

  &::before {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    height: 2px;
    background: #5c5c5c;
  }
}

// Profile
#sectionProfile {
  .basicInfo {
    font-family: 'Comfortaa', 'Source Sans Pro', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;
    font-weight: 200;
    font-size: 1rem;
    margin-bottom: 2rem;

    li {
      margin-bottom: 0.5rem;

      // name
      &:nth-of-type(1) {
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }
      .sub {
        color: #9a9a9a;
      }
    }
  }

  .accounts {
    // .account {
    //   width: ;
    // }
    img {
      display: block;
      width: 3rem;
    }
    .github {
      background: #333;
    }
    .qiita {
      background: #55c500;
    }
  }
}

// Skills
#sectionSkills {
  font-family: 'Comfortaa', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 200;
  font-size: 1rem;

  li {
    margin-bottom: 3rem;
  }
}

/* ----- レスポンシブ ----- */
/* スマートフォン */
@media only screen and (max-width: 599px) {
  h2 {
    position: relative;
    left: 0;
    transform: none;
    padding-top: 5rem;
    margin-bottom: 1rem;

    font-size: 2.5rem;
    text-align: center;
  }

  .mainWrapper {
    padding: 0;
  }
  main {
    width: 95%;
    margin: 0 auto;
    margin-bottom: 3rem;
    padding: 2rem;
    background: #f9f9f9cb;
  }

  h3 {
    font-size: 1.5rem;
  }

  #sectionProfile {
    .basicInfo {
      li {
        &:nth-of-type(1) {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          span {
            font-size: 1.3rem;
          }
        }
        span {
          display: inline-block;
        }
      }
    }
  }
}
</style>
