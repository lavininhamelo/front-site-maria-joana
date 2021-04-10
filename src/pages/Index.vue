<template>
  <q-page class="flex flex-center column ">
    <Header></Header>
    <Products></Products>
    <Courses></Courses>
    <Contact></Contact>
  </q-page>
</template>

<script>
import Header from "../components/Header";
import Products from "../components/Products";
import Courses from "../components/Courses";
import Contact from "../components/Contact";

export default {
  name: "PageIndex",
  components: {
    Header,
    Products,
    Courses,
    Contact
  },
  data() {
    return {};
  }
};
</script>
<style scoped></style>
