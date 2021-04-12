<template>
    <div class="about container full-width column items-center">
        <Title title="Sobre" subtitle="nossa causa"></Title>
        <div class="A artista">
             <q-card class="my-card">
                <q-card-section>
                    <div class="text-h6">A artista</div>
                </q-card-section>
                <q-card-section>
                Maria Joana é uma cantora e dançarina brasileira Drag-Queen que apoia o movimento LGBT. 
                Atualmente está na Colômbia  para alavancar sua carreira Internacional, 
                mas no momento o seu foco não está na parte artistica e sim em cursos 
                e vendas de produtos em gerais...
                </q-card-section>
        </q-card>
        </div>
    </div>
</template>
<script>
import Title from "./global/Title.vue";
export default {
  components: { Title },
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style lang="scss" scoped>
   .about {
    background: #FFFFFF;
    }

</style>