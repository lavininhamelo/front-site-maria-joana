<template>
  <q-page class="column q-px-xl">
    <Header
      title="Sobre"
      subtitle="Nessa área você pode alterar o conteudo do site"
    >
    </Header>
    <div class="items">
      <div class="linha q-my-lg">
        <div class="row items-center">
          <q-icon name="article" size="32px" />
          <span>A Artista</span>
        </div>
        <q-btn color="primary" label="Editar" @click="artist = true" />
        <q-dialog v-model="artist">
          <q-card style="min-width: 320px; width: 60%">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">Sobre a Artista</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>
            <q-separator spaced />
            <q-card-section>
              <q-input v-model="about.artist" filled square type="textarea" />
            </q-card-section>
            <q-card-section>
              <q-btn
                color="primary"
                label="Salvar alterações"
                @click="editAbout()"
                class="q-py-xs full-width"
              />
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
      <div class="linha q-my-lg">
        <div class="row items-center">
          <q-icon name="article" size="32px" />
          <span> Movimento LGBT</span>
        </div>
        <q-btn color="primary" label="Editar" @click="lgbt = true" />
        <q-dialog v-model="lgbt">
          <q-card style="min-width: 320px; width: 60%">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">Movimento LGBT</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>
            <q-separator spaced />
            <q-card-section>
              <q-input v-model="about.lgbt" filled square type="textarea" />
            </q-card-section>
            <q-card-section>
              <q-btn
                color="primary"
                label="Salvar alterações"
                @click="editAbout()"
                class="q-py-xs full-width"
              />
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
      <div class="linha q-my-lg">
        <div class="row items-center">
          <q-icon name="article" size="32px" />
          <span>Veganismo</span>
        </div>

        <q-btn color="primary" label="Editar" @click="vegan = true"/>
        <q-dialog v-model="vegan">
          <q-card style="min-width: 320px; width: 60%">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">Veganismo</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>
            <q-separator spaced />
            <q-card-section>
              <q-input v-model="about.vegan" filled square type="textarea" />
            </q-card-section>
            <q-card-section>
              <q-btn
                color="primary"
                label="Salvar alterações"
                @click="editAbout()"
                class="q-py-xs full-width"
              />
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
import Header from "src/components/admin/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      artist: false,
      lgbt: false,
      vegan: false,
      about: {
        artist: "",
        lgbt: "",
        vegan: "",
      },
    };
  },

  methods: {
    async getAbout() {
      const response = await axios.get('http://localhost:3000/about')
      this.about = response.data
    }, 
    async editAbout() {
      const data = {
        artist: this.about.artist,
        lgbt: this.about.lgbt,
        vegan: this.about.vegan
      }
      await axios.put('http://localhost:3000/about/', data)
      this.lgbt = false;
      this.artist = false;
      this.vegan = false;
    }
  },
  mounted() {
    this.getAbout()
  }
 
};
</script>

<style lang="scss" scoped>
.items {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: column wrap;

  .linha {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    span {
      margin-left: 16px;
      font-weight: bold;
      font-size: 18px;
      line-height: 28px;
    }
  }
}
</style>