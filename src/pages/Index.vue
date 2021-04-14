<template>
  <q-page class="flex flex-center column index">
    <Header id="header"></Header>
    <Products></Products>
    <Courses></Courses>
    <Separator color="#fcf6ec"></Separator>
    <Contact id="contact" />
  </q-page>
</template>

<script>
import Header from "../components/Header";
import Products from "../components/Products";
import Courses from "../components/Courses";
import Contact from "../components/Contact";
import Separator from "../components/Separator.vue";

export default {
  name: "PageIndex",
  components: {
    Header,
    Products,
    Courses,
    Contact,
    Separator
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.index {
  width: 100%;
}
</style>
