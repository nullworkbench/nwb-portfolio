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
          <li>
            <span class="emoji">&#x1f978;</span>Name: Tetta Ueyama
            (nullworkbench)
          </li>
          <li>
            <span class="emoji">&#x1f389;</span>Date of birth: December 7, 2001
          </li>
          <li>
            <span class="emoji">&#x1f4e7;</span>Email:
            nullworkbench[at]gmail.com
          </li>
        </ul>
        <div>
          <p>
            小学生のころ、演劇クラブの台本をWordで作成したのが初めての制作活動。中学生でHTML/CSSに出会い、自分の自己紹介サイトなどを作り始める。
          </p>
          <p>
            高校生の時に友人のアルバイト先からWebサイト制作を依頼され、初めて仕事として受注、納品。
          </p>
          <p>
            その後は自分でWebサイトをお持ちでない商店へ営業するなどし高校卒業時には３顧客を獲得。Webコーディングと同じく趣味としていたカメラを扱う技術を組み合わせ、写真、動画撮影も事業に追加。
          </p>
          <p>現在に至る。</p>
        </div>
      </section>
      <section>
        <h3>Skills</h3>
        <ul></ul>
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
  width: 65%;
  margin: 4rem 0 0 auto;
  padding: 3rem;
  background: #f9f9f9;
}

section {
  margin-bottom: 4rem;
}

h3 {
  font-size: 3rem;
  font-weight: 200;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #5c5c5c;
  }
}
</style>
