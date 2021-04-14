<template>
  <div class="w-full column items-center container q-mt-lg">
    <Title :title="'Produtos'" class="q-mt-lg" />
    <div class="row full-width justify-center q-my-lg">
      <div class="q-px-lg " v-for="(card, index) in 30" :key="index">
        <Card title="Lorem ipsum"> </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "src/components/global/Title.vue";
import Card from "src/components/global/Card.vue";
export default {
  components: {
    Title,
    Card
  }
};
</script>

<style l Titleang="scss" scoped></style>
