<template>
  <header class="column ">
    <h1>Maria Joana</h1>
    <img src="~/assets/linha.png" alt="linha" />
    <span>Dança e artesanato</span>
    <div class="botao-catalogo" @click="go('/produtos')">
      <q-btn class="botao" color="primary" label="Ver Catálogo" />
    </div>
    <Separator class="self-end" bottom></Separator>
  </header>
</template>

<script>
import Separator from "./Separator.vue";
export default {
  components: { Separator },
  methods: {
    go(value) {
      this.$router.push(value);
    }
  }
};
</script>

<style lang="scss" scoped>
.botao {
  width: 305px;
  margin: 24px 0px;
}
span {
  color: $secondary;
  font-family: "Roboto", Fallback, sans-serif;
  margin: 16px 0px;
}
header {
  padding-top: 36px;
  padding-bottom: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $beige;
}
h1 {
  color: $secondary;
  font-family: "Mine", Fallback, sans-serif;
  margin-bottom: 0px;
  font-size: 64px;
}
</style>
