<template>
  <q-layout view="lHh Lpr lFf">
    <div class=" flex w-full column justify-center ">
       <iframe
          src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
          :width="getScreenSize()*0.988"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      <div class="top  w-full">
        <Menu class="menu" />
      </div>
      <q-page-container>
        <router-view />
      </q-page-container>
      <Footer />
      <div class="whatsapp">
        <a
          target="_blank"
          :href="
            'https://api.whatsapp.com/send/?phone=' +
              numero +
              '&text=Ol%C3%A1,+pode+me+ajudar+?'
          "
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-512.png"
            alt="Chamar no Whatsapp"
            width="64"
        /></a>
      </div>
    </div>
  </q-layout>
</template>

<script>
import Menu from "../components/Menu";
import Footer from "../components/Footer";
export default {
  name: "MainLayout",
  components: {
    Menu,
    Footer
  },
  data() {
    return {
      numero: "+5561991577460"
    };
  },
  methods: {
    getScreenSize() {
      return this.$q.screen.width;
    },
  }
};
</script>
<style lang="scss" scoped>
.whatsapp {
  margin: 32px;
  position: fixed;
  bottom: 0;
  right: 0;
}

.top {
  z-index: 99;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;

  .menu {
    margin-top: -6px;
  }
}
</style>

