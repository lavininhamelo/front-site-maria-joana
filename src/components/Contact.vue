<template>
  <div>
    <h2>Contact</h2>
    <q-input v-model="text" type="text" label="Label" outlined />
    <q-btn color="primary" icon="check" label="Botão" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style lang="scss" scoped></style>
