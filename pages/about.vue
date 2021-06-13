<template>
  <div class="container">
    <!-- ページタイトル -->
    <h2>About</h2>

    <!-- コンテンツ -->
    <main>
      <!-- Profile -->
      <section>
        <h3>Profile</h3>
        <ul>
          <li><span class="emoji">&#x1f476;&#x1f3fb;</span>2001年生まれ</li>
          <li>
            <span class="emoji">&#x1f393;</span>専修大学ネットワーク情報学部
            在学中
          </li>
        </ul>
        <div>
          <p>
            小学生のころ、演劇クラブの台本をWordで作成したのが初めての制作活動
            中学生でHTML/CSSに出会い、自分の自己紹介サイトなどを作り始める。
          </p>
          <p>
            高校生の時に友人のアルバイト先からWebサイト制作を依頼され、初めて仕事として受注、納品。
          </p>
          <p>
            その後は自分でWebサイトのないお店へ営業するなどし高校卒業時には３顧客を獲得。Webコーディングと同じく趣味としていたカメラの技術を組み合わせ、写真、動画撮影も事業に追加。
          </p>
          <p>現在に至る。</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
h2 {
  // position
  position: absolute;
  top: 50%;
  left: 12%;
  transform: translateY(-50%);
}

main {
  position: relative;
  width: 70%;
  margin: auto 0 0 auto;
  padding: 3rem;
}
</style>
