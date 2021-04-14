<template>
  <div class="title">
    <div class="row no-wrap items-center">
      <img src="~/assets/esquerda.svg" alt="seta-esquerda" />
      <h2>{{ title || "Titulo" }}</h2>
      <img src="~/assets/direita.svg" alt="seta-direita" />
    </div>
    <span>{{ subtitle ? subtitle : "" }}</span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h2 {
  margin: 0px 8px;
  padding: 0px;
  font-size: 32px;
  color: $tertiary;
  font-family: "Slabo 13px", serif;
}

span {
  font-family: "Nanum Pen Script", cursive;
  margin: 0px;
  padding: 0px;
  font-size: 18px;
}
</style>
