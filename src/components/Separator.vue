<template>
  <div
    :style="`background-color: ${color}`"
    class="separator"
    :class="bottom ? 'top' : 'bottom'"
  ></div>
</template>
<script>
export default {
  props: {
    bottom: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom {
  width: 100%;
  height: 100px;
  background: url("~assets/bottom.svg");
  background-size: 100%;
  background-position-y: bottom;
  background-repeat: no-repeat;
}
.top {
  width: 100%;
  height: 100px;
  background: url("~assets/top.svg");
  background-size: 100%;
  background-position-y: top;
}
</style>
