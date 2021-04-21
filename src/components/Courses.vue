<template>
  <div class="courses container full-width column items-center">
    <Title title="Cursos" subtitle="os mais procurados"></Title>
    <q-carousel
      flat
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      :autoplay="3600"
      infinite
      draggable
      animated
      control-color="primary"
      class="bg-transparent full-width"
      padding
      arrows
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <Card name="One Course 1" value="R$ 21,00"></Card>
          <Card name="One Course 2" value="R$ 22,00"></Card>
          <Card name="One Course 3" value="R$ 23,00"></Card>
          <Card name="One Course 4" value="R$ 24,00"></Card>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div
          class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <Card name="One Course 5" value="R$ 25,00"></Card>
          <Card name="One Course 6" value="R$ 26,00"></Card>
          <Card name="One Course 7" value="R$ 27,00"></Card>
          <Card name="One Course 8" value="R$ 28,00"></Card>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <q-btn color="primary" label="Ver todos" outline class="q-px-xl q-mb-lg" />
  </div>
</template>
<script>
import Title from "./global/Title.vue";
import Card from "./global/Card.vue";
export default {
  components: { Card, Title },
  data() {
    return {
      slide: 1,
      products: [1, 2, 3, 4, 5, 6,7,8,9,10,11,12]
    };
  }
};
</script>
<style lang="scss" scoped>
.courses {
  background: $beige2;
}
</style>
