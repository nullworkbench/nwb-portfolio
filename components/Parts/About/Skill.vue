<template>
  <div>
    <h4>
      <strong>{{ data[0] }}</strong
      >（ {{ data[1].join(' / ') }} ）
    </h4>
    <p>
      {{ now.getFullYear() - data[2] }} years experience since {{ data[2] }}
    </p>
    <div class="skillDots">
      <SkillDots :num-of-dots="now.getFullYear() - data[2]" />
    </div>
    <div class="toWorksLinkWrap">
      <nuxt-link
        :to="'/works?category=' + data[0].toLowerCase().replace(/\s+/g, '')"
        >My {{ data[0] }} Works</nuxt-link
      >
      <div></div>
    </div>
  </div>
</template>

<script>
import SkillDots from '~/components/Parts/About/SkillDots.vue'

export default {
  components: {
    SkillDots,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      now: new Date(),
    }
  },
}
</script>

<style lang="scss" scoped>
h4 {
  font-size: 1rem;
  font-weight: 200;
  margin-bottom: 0.6rem;

  strong {
    font-size: 1.5rem;
  }
}

p {
  font-size: 1rem;
  color: #474747;
  margin-bottom: 0.8rem;
}

.toWorksLinkWrap {
  margin-top: 1rem;
  a {
    display: inline-block;
    // text-decoration: none;
    color: #333;
    font-size: 0.8rem;

    &:hover {
      color: #7a7a7a;
      + div {
        width: 40px;
      }
    }
  }

  > div {
    $arrowColor: #333;
    $arrowWidth: 1px;
    position: relative;
    display: inline-block;
    background: $arrowColor;
    width: 20px;
    height: $arrowWidth;
    border-radius: 1px;
    transition: width 0.4s;

    &::before {
      content: '';
      position: absolute;
      right: -1px;
      background: $arrowColor;
      width: 7px;
      height: $arrowWidth;
      border-radius: 1px;
    }
    &::before {
      top: -2px;
      transform: rotate(45deg);
    }
  }
}
</style>
