<template>
<<<<<<< HEAD
  <header class="column justify-between">
    <p></p>
   <div class="column flex-center">
      <h1>Maria Joana</h1>
=======
  <header class="column ">
    <h1>Maria Joana</h1>
>>>>>>> c869f3c5213aedbce05cb6eef4e60729eb1a8c75
    <img src="~/assets/linha.png" alt="linha" />
    <span>Dança e artesanato</span>
    <div class="botao-catalogo" @click="go('/produtos')">
      <q-btn class="botao" color="primary" label="Ver Catálogo"  />
    </div>
<<<<<<< HEAD
   </div>
    <Separator bottom></Separator>
=======
    <Separator class="self-end" bottom></Separator>
>>>>>>> c869f3c5213aedbce05cb6eef4e60729eb1a8c75
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
  margin-top: 24px;
  margin-bottom: 50%;
}
span {
  color: $secondary;
  font-family: "Roboto", Fallback, sans-serif;
  margin: 16px 0px;
}
header {
<<<<<<< HEAD
=======
  padding-top: 36px;
  padding-bottom: 0px;
>>>>>>> c869f3c5213aedbce05cb6eef4e60729eb1a8c75
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  background: $beige;
  background-image: url("~assets/bg-esquerda.svg"), url("~assets/bg-direita.svg");
  background-position: top left, right bottom;
  background-repeat: no-repeat, no-repeat;
  background-size: contain, contain ;
}
h1 {
  color: $secondary;
  font-family: "Mine", Fallback, sans-serif;
  margin-bottom: 0px;
  font-size: 64px;
}
p{
  margin-bottom: 64px;
}
</style>
