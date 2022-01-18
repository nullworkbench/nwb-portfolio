<template>
  <div class="container">
    <span>iPhoneアプリ</span>
    <h3>Dr. Pepper Finder</h3>

    <div class="basicInfo">
      <ul>
        <li>開発期間：2021/04/12 ~</li>
        <li>担当：企画、デザイン、開発、運営</li>
        <li>開発技術：Swift, Firebase</li>
        <li>
          参考リンク：<a
            href="https://apps.apple.com/jp/app/dp-finder/id1603759636"
            target="_blank"
            >App Store</a
          >
        </li>
      </ul>
    </div>

    <section>
      <h4>開発のきっかけ</h4>
      <p>Swift、主にUIKit学習のため制作。</p>
    </section>

    <section>
      <h4>制作意図</h4>
      <p>
        私が好きなジュース「ドクターペッパー」の販売場所が少なく、飲みたい時に飲めないと思ったことがきっかけ。この問題を解決するためには「全国のドクターペッパーファンが販売場所を共有すれば良いのではないか」と考え開発を開始した。
      </p>
    </section>

    <section class="section3">
      <h4>アピールポイント</h4>
      <p>
        アプリには大きくマップを表示し、「ドクターペッパーを探す」ということを最優先にしたUIにした。ユーザーの１番の目的である「ドクターペッパーを購入すること」を意識したUI、機能設計を行い、マップアプリとの連携なども意識した。
      </p>
      <p>
        情報の鮮度を保つ工夫も行なった。各投稿に対し「まだあった！」「なくなってた…」ボタンを設置することで、入れ替わりの激しい自動販売機などにも最新の販売情報で対応できるようにした。
      </p>
      <img src="/works/drpepperfinder/01.png" />
      <p>
        また、ユーザーに新しく販売所を共有してもらうために、新規投稿はなるべく簡単に行えるよう情報を削ぎ落として実装した。
      </p>
      <img src="/works/drpepperfinder/02.png" />
    </section>

    <section>
      <h4>App Storeで配信中</h4>
      <a
        href="https://apps.apple.com/jp/app/dp-finder/id1603759636"
        target="_blank"
        class="dlLink"
        ><img src="/works/icons/appstore_dl.svg"
      /></a>
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
