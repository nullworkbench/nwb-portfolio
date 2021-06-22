<template>
  <div class="container">
    <span>iPhoneアプリ</span>
    <h3>星に願いを。</h3>

    <div class="basicInfo">
      <ul>
        <li>開発期間：2021/04/22 ~ 2021/05/11</li>
        <li>担当：企画、デザイン、開発、運営</li>
        <li>開発技術：Swift, Firebase</li>
        <li>
          参考リンク：<a
            href="https://apps.apple.com/jp/app/%E6%98%9F%E3%81%AB%E9%A1%98%E3%81%84%E3%82%92/id1556027369"
            target="_blank"
            >App Store</a
          >
        </li>
      </ul>
    </div>

    <section>
      <h4>開発のきっかけ</h4>
      <p>アルバイト先（Life is Tech！）の研修課題のため企画、制作。</p>
    </section>

    <section>
      <h4>制作意図</h4>
      <p>
        普段から星を眺めるのが好きで、一人で天体撮影なども行う私が、ふと「今ここで星を眺めているのは自分だけだが、<strong>同じ夜空を誰かもどこかで眺めているのだろうか</strong>」と考えたことがアイデアの原体験。
      </p>
      <p>
        スマートフォンの画面を星空に見立て、星空を通した繋がりをインターネットで視覚化することで、「<strong>物理的な距離は離れつつも、心の距離が近づく</strong>」サービスを目指した。
      </p>
    </section>

    <section class="section3">
      <h4>アピールポイント</h4>
      <p>
        「星空を眺め、繋がる」というコンセプトを大切にし、デザインや機能面などのユーザー体験にこだわった。星空を眺めながら使うということは周囲が暗い場所の可能性が高いためアプリの背景色を暗い色にしたり、画面を見つめずともすぐに操作がわかるようにボタンを配置したりなどを行い、アプリを設計、実装した。
      </p>
      <img src="/works/wishuponastar/01.png" />
      <p>
        また、「繋がっている」という体験を生み出すため、<strong>画面上にコンパスを設置し自分が向いた方向によって願いごとの表示が変わる</strong>インタラクティブな実装にすることで、「インターネット上ではあるが、<strong>自分の行動によって星空を通して繋がった</strong>」というこのアプリの世界観への没入感を高めた。
      </p>
    </section>

    <section>
      <h4>App Storeで配信中</h4>
      <a
        href="https://apps.apple.com/jp/app/%E6%98%9F%E3%81%AB%E9%A1%98%E3%81%84%E3%82%92/id1556027369"
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
    width: 12rem;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
}
</style>
