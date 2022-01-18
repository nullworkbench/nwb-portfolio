<template>
  <div class="container">
    <span>Webアプリ</span>
    <h3>Survival Kit</h3>

    <div class="basicInfo">
      <ul>
        <li>開発期間：2021/08/30 ~ 2021/09/16</li>
        <li>担当：企画、デザイン、開発、運営</li>
        <li>開発技術：Next.js, Illustrator</li>
        <li>
          参考リンク：<a href="https://survival-kit.vercel.app/" target="_blank"
            >Survival Kit</a
          >,
          <a href="https://github.com/nullworkbench/SurvivalKit" target="_blank"
            >GitHub</a
          >
        </li>
      </ul>
    </div>

    <section>
      <h4>開発のきっかけ</h4>
      <p>大学の夏期課題「サバイバルのためのデザイン」で制作。</p>
    </section>

    <section>
      <h4>概要</h4>
      <p>
        「サバイバルのためのデザイン」という課題に対して、私は「事前対策」という切り口で制作を行なった。災害が発生した際に素早く避難するためには事前の準備が大切である。そこで、避難リュックサックの中身を家族構成によって自動で計算するツールを開発した。
      </p>
    </section>

    <section class="section3">
      <h4>アピールポイント</h4>
      <p>
        いざ備えようとなったとき、例えば商業施設の防災コーナーを見た時にでもすぐに必要なものが分かることを念頭に開発を進めた。簡単に素早くするためアプリの操作は３ステップにまとめ、誰でもわかりやすいUIを目指した。
      </p>
      <p>
        特に、家族構成を登録する画面では人物のアイコンを年齢・性別によって切り替えたり、名前を設定できるようにすることで今登録できている人を分かりやすくした。
      </p>
      <p>
        また、防災グッズにはそれぞれ詳細情報を実装しており、「なぜ必要なのか」を確認できるようにすることでユーザーが納得して準備できるようにすることも意識した。
      </p>
      <img src="/works/survivalkit/01.png" />
    </section>

    <section>
      <h4>Vercelで公開中</h4>
      <a href="https://survival-kit.vercel.app/" target="_blank" class="dlLink"
        >Survival Kit</a
      >
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/WorksPagesCommon.scss';

.section3 {
  > img {
    width: 18rem;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
}
</style>
