<template>
  <q-card class="my-card">
    <img
      src="https://images.unsplash.com/photo-1519482842619-9e02ba21eac4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    />

    <q-card-section>
      <div class="text-h6">Our Changing</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      R$ 45,00
    </q-card-section>

    <q-card-section class="q-pt-none row">
      <q-btn color="primary" label="Comprar" class="q-px-lg" unelevated />
    </q-card-section>
  </q-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.my-card {
  width: 180px;
  margin: 16px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
