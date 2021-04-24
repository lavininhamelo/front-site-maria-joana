<template>
  <div
    :style="`background-color: ${color}; height: ${$q.screen.width > 1366 ? 150:100}px`"
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
  background: url("~assets/bottom.svg");
  background-size: 100%;
  background-position-y: bottom;
  background-repeat: no-repeat;
}
.top {
  width: 100%;
  background: url("~assets/top.svg");
  background-size: 100%;
  background-position-y: top;
  background-repeat: no-repeat;

}
</style>
