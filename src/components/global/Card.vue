<template>
  <q-card
    color="green"
    :style="'width:' + cardWidth"
    class="my-card  bg-white"
    :class="shadow ? 'shadow-8' : 'shadow-4'"
    @mouseenter="shadow = !shadow"
    @mouseleave="shadow = !shadow"
    @click="$router.push('/comprar/produto')"
  >
    <img
      src="https://images.unsplash.com/photo-1519482842619-9e02ba21eac4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    />

    <q-card-section class="q-pb-none">
      <p>{{ name }}</p>
    </q-card-section>

    <q-card-section dense class="q-pt-none text-secondary text-bold">
      {{ value }}
    </q-card-section>

    <q-card-section class="q-pt-none row flex-1 full-width">
      <q-btn
        color="primary"
        label="Comprar"
        class="row full-width"
        @click="buy()"
      />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      shadow: false
    };
  },
  methods: {
    buy() {
      const link = `https://api.whatsapp.com/send?l=pt-BR&text=Ol%C3%A1%2C%20gostaria%20de%20comprar%20o%20*${
        this.name
      }*%0A%0A*Informa%C3%A7%C3%B5es%20da%20Compra*%0A%0A*Nome%3A*%20${
        this.name
      }%0A%0A*Quantidade%3A*%20${1}%0A%0A*Valor%3A*%20R%24%20${
        this.value
      }&phone=5561991577460`;
      window.open(link);
    }
  },
  props: {
    name: {
      type: String
    },
    value: {
      type: String
    },
    whatsapp: {
     type: String,
      default: "+5561991577460"
    }
  },
  computed: {
    cardWidth() {
      const size = this.$q.screen.width / 6.5 + "px";
      return size;
    }
  }
};
</script>

<style lang="scss" scoped>
.my-card {
  min-width: 200px;
  margin: 16px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Slabo 13px", serif;
  border-radius: 8px;
}
</style>
