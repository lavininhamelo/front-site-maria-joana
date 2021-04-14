<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
    </q-card-section>
    <q-card-section>{{ body }} </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    body: String,
    title: String
  }
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 420px;
  text-align: center;
  padding: 16px;
  background: #64743f;
  color: #ffeded;
  box-shadow: 32px 32px 0px #c3c9b4;
}
</style>
