<template>
  <q-card color="green" :style="'width:' + cardWidth + 'px'" class="my-card">
    <img
      src="https://images.unsplash.com/photo-1519482842619-9e02ba21eac4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    />

    <q-card-section class="q-pb-none">
      <p>Our Changing</p>
    </q-card-section>

    <q-card-section dense class="q-pt-none text-secondary text-bold">
      R$ 45,00
    </q-card-section>

    <q-card-section class="q-pt-none row flex-1 full-width">
      <q-btn color="primary" label="Comprar" class="row full-width" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  computed: {
    cardWidth() {
      return this.$q.screen.width / 6.5;
    }
  }
};
</script>

<style lang="scss" scoped>
.my-card {
  min-width: 200px;
  margin: 16px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Slabo 13px", serif;
  border-radius: 8px;
}
</style>
