<template>
  <div :class="bottom ? 'top' : 'bottom'"></div>
</template>
<script>
export default {
  props: {
    bottom: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom {
  width: 100vw;
  height: 100px;
  background: url("~assets/bottom.svg");
  background-size: cover;
  background-position-y: bottom;
}
.top {
  width: 100vw;
  height: 100px;
  background: url("~assets/top.svg");
  background-size: cover;
  background-position-y: top;
}
</style>
