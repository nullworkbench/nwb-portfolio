<template>
  <div class="work">
    <div class="workInner">
      <img :src="'/works/' + data[3]" />
      <div class="hover">
        <div>
          <h3>{{ data[1] }}</h3>
          <p>{{ data[2] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.work {
  position: relative;
}
.workInner {
  width: 100%;
  padding-bottom: 100%;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 100%;
    transform: translate(-50%, -50%);
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
    // font
    color: #fff;
    text-align: center;
    // animation
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s, visibility 0.4s;

    > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
    }
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
</style>
