<template>
  <q-page class="about container full-width column items-center">
    <Title title="Sobre" class="q-mt-xl" subtitle="nossa causa"></Title>

    <div class="artista">
      <img src="~/assets/SVG/woman.svg" alt="Sobre a Artista" />
      <TextCard
        title="A artista"
        body="Maria Joana é uma cantora e dançarina brasileira Drag-Queen que apoia
          o movimento LGBT. Atualmente está na Colômbia para alavancar sua
          carreira Internacional, mas no momento o seu foco não está na parte
          artistica e sim em cursos e vendas de produtos em gerais..."
      />
    </div>

    <div class="lgbt">
      <img src="~/assets/SVG/lgbt.svg" alt="Sobre LGBT" />
      <TextCard
        title="Movimento LGBT"
        body="  O movimento LGBT é uma organização sem fins lucrativos que promove a
          inclusão de pessoas LGBTI+ na sociedade com iniciativas de formação de
          lideranças, pesquisa, conscientização e segurança."
      />
    </div>

    <div class="veganismo">
      <img src="~/assets/SVG/vegano.svg" alt="Sobre o veganismo" />
      <TextCard
        title="Veganismo"
        body="     O veganismo é a prática de se abster do uso de produtos de origem
          animal, procurando excluir, na medida do possível e praticável, o uso
          de qualquer produto de origem animal, seja na alimentação ou no
          vestuário. Um seguidor desta prática é conhecido como vegano, que é o
          caso de Maria Joana."
      />
    </div>
  </q-page>
</template>
<script>
import TextCard from "src/components/global/TextCard.vue";
import Title from "../components/global/Title";
export default {
  components: { Title, TextCard },
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.about {
  background: #ffffff;
}

.artista {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 48px 0px;
}
.lgbt {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  width: 100%;
  margin: 48px 0px;
}
.veganismo {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 48px 0px;
}
</style>
