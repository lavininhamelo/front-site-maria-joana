<template>
  <q-layout view="lHh Lpr lFf">
    <div class="flex w-full column justify-center ">
      <Menu />
      <q-page-container>
        <router-view />
      </q-page-container>
      <Footer />
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
    return {};
  }
};
</script>
