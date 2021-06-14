<template>
  <div>
    <svg
      v-for="i of numOfDots"
      :key="i"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 437.51 512"
    >
      <path
        d="M0,479.92a32.08,32.08,0,0,0,48.16,27.76l138.44-80.2a64.2,64.2,0,0,1,64.31,0l138.45,80.2a32.08,32.08,0,0,0,48.15-27.76V0H0"
        transform="translate(0 0)"
        style="fill: #d6d2d2"
      />
      <path
        d="M114.94,208.42l50.14,41.27a6.43,6.43,0,0,1,2.13,6.57L150.9,319.11a6.42,6.42,0,0,0,9.66,7L215.3,291.2a6.44,6.44,0,0,1,6.91,0l54.73,34.94a6.42,6.42,0,0,0,9.66-7l-16.3-62.85a6.39,6.39,0,0,1,2.13-6.57l50.14-41.27a6.42,6.42,0,0,0-3.69-11.36l-64.83-3.9a6.43,6.43,0,0,1-5.58-4.06l-23.74-60.44a6.42,6.42,0,0,0-11.95,0L189,189.1a6.43,6.43,0,0,1-5.58,4.06l-64.83,3.9a6.42,6.42,0,0,0-3.68,11.36Z"
        transform="translate(0 0)"
        style="fill: #fff"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    numOfDots: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
svg {
  display: inline-block;
  width: 1.2rem;
  margin-right: 1rem;
  /* filter: drop-shadow(1px 1px 5px hsla(0, 0%, 73%, 0.3)); */
}
</style>
