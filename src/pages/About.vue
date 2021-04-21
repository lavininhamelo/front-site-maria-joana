<template>
  <q-page class="about container full-width column items-center">
    <Title title="Sobre" class="q-mt-xl" subtitle="nossa causa"></Title>

    <div class="artista">
      <img src="~/assets/SVG/woman.svg" alt="Sobre a Artista" />
      <TextCard
        title="A artista"
        :body="about.artist"
      />
    </div>

    <div class="lgbt">
      <img src="~/assets/SVG/lgbt.svg" alt="Sobre LGBT" />
      <TextCard
        title="Movimento LGBT"
        :body="about.lgbt"
      />
    </div>

    <div class="veganismo">
      <img src="~/assets/SVG/vegano.svg" alt="Sobre o veganismo" />
      <TextCard
        title="Veganismo"
        :body="about.vegan"
      />
    </div>
  </q-page>
</template>
<script>
import axios from 'axios'
import TextCard from "src/components/global/TextCard.vue";
import Title from "../components/global/Title";
export default {
  methods :{
    async getAbout(){
      const response = await axios.get('http://localhost:3000/about')
      this.about =  response.data
    }
  },
  mounted(){
    this.getAbout()
  },
  components: { Title, TextCard },
  data() {
    return {
      text: "", 
      about: {
        artist: "",
        vegan: "",
        lgbt: ""
      }
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
