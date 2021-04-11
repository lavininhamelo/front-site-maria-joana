<template>
  <div class="products container full-width column items-center">
    <Title title="Produtos" subtitle="os queridinhos"></Title>
    <q-carousel
      flat
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      :autoplay="2500"
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
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div
          class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
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
      products: [1, 2, 3, 4, 5, 6]
    };
  }
};
</script>
<style lang="scss" scoped>
.products {
  background: $beige2;
}
</style>
