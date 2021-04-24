<template>
  <div class="w-full column items-center container q-pb-lg bg">
    <Title :title="'Cursos'" class="q-mt-lg" />
    <div class="row full-width justify-center q-my-lg">
      <div class="q-px-lg " v-for="(course, index) in courses" :key="index">
        <Card  :key="whatsapp" :name="course.name" :value="course.value" :whatsapp="whatsapp"> </Card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Title from "src/components/global/Title.vue";
import Card from "src/components/global/Card.vue";
export default {
  components: {
    Title,
    Card
  },
  data() {
    return {
      courses: [],
      whatsapp: '61991577460'
    };
  },
  methods: {
    async getAllcourses() {
      const response = await axios.get("http://localhost:3000/courses");
      console.log(response);
      this.courses = response.data;
    },
     async getWhatsapp(){
      const response = await axios.get("http://localhost:3000/contacts");
      this.whatsapp = response.data.whatsapp
    }
  },
  mounted() {
    this.getAllcourses();
    this.getWhatsapp()
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background: $beige;
}
</style>
