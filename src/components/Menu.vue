<template>
  <div>
    <h2>Menu</h2>
    <div class="row">
      <ul>
        <li @click="go('/')">Ínicio</li>

        <li @click="go('/sobre')">Sobre</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    go(value) {
      this.$router.push(value);
    }
  }
};
</script>

<style lang="scss" scoped></style>
