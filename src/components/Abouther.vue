<template>
    <div class="about container full-width column items-center">
        <Title title="Sobre" subtitle="nossa causa"></Title>
        <div class="Artista">
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
        <div class="LBGT">
             <q-card class="my-card">
                <q-card-section>
                    <div class="text-h6">Movimento LGBT</div>
                </q-card-section>
                <q-card-section>
               O movimento LGBT é uma organização sem fins lucrativos que promove a inclusão de pessoas LGBTI+ 
               na sociedade com iniciativas de formação de lideranças, pesquisa, conscientização e segurança.
                </q-card-section>
        </q-card>
        </div>
        <div class="Veganismo">
             <q-card class="my-card">
                <q-card-section>
                    <div class="text-h6">Veganismo</div>
                </q-card-section>
                <q-card-section>
                O veganismo é a prática de se abster do uso de produtos de origem animal, procurando excluir, 
                na medida do possível e praticável, o uso de qualquer produto de origem animal, 
                seja na alimentação ou no vestuário. Um seguidor desta prática é conhecido como vegano, 
                que é o caso de Maria Joana.
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
  .my-card{
    background: #64743F;
    color: #FFEDED;
  }


</style>