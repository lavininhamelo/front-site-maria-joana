<template>
  <q-page class="flex flex-center column index">
    <Header id="header"></Header>
    <Products v-if="whatsapp" :key="products" :data="products" :whatsapp="whatsapp"></Products>
    <Courses v-if="whatsapp" :key="courses" :data="courses" :whatsapp="whatsapp"></Courses>
    <Separator color="#fffdfa"></Separator>
    <Contact  id="contact" />
  </q-page>
</template>

<script>
import axios from "axios"
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
    return {
      whatsapp: false,
      products: [],
      courses: []
    };
  },
 methods: {
   async getAllcourses() {
      const response = await axios.get("http://localhost:3000/courses");
      this.courses = response.data;
    },
    async getAllproducts() {
      const response = await axios.get("http://localhost:3000/products");
      console.log(response);
      this.products = response.data;
    },
     async getWhatsapp(){
      const response = await axios.get("http://localhost:3000/contacts");
      this.whatsapp = response.data.whatsapp
    }
 },
  mounted(){
   this.getAllcourses()
   this.getWhatsapp()
   this.getAllproducts()
  }
};
</script>
<style scoped>
.index {
  width: 100%;
}
</style>
