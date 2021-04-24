<template class="pagina">
  <q-page class="flex column flex-center index">
    <span class="text-bold text-h2 texto">Área de Administração</span>
    <p class="q-mt-md">Escolha qual area você deseja gerenciar</p>
    <div class="row wrap q-mt-xl quadrado">
     
      <span class="btn-opt" @click="go('sobre')">
        <q-icon name="feed" class="q-mb-sm" size="1.5rem" />
       Sobre
      </span>
      <span class="btn-opt" @click="go('produtos')">
        <q-icon name="inventory" class="q-mb-sm" size="1.5rem" />
        Produtos
      </span>
      <span class="btn-opt" @click="go('cursos')">
        <q-icon name="play_circle" class="q-mb-sm" size="1.5rem" />
        Cursos
      </span>
      <span class="btn-opt" @click="go('contatos')">
        <q-icon name="contact_page" class="q-mb-sm" size="1.5rem" />
       Contato
      </span>
    </div>
  </q-page>
</template>

<script>

export default {
  components: {
    Header
  },
  data(){
    return {
      
    }
  },
      methods: {
        go(value) {
          const path = "/admin/"+value
           if(this.$route.path === (path)){
             return
           } else this.$router.push(path)
        }
      },
}
import Header from 'src/components/admin/Header.vue'
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
}

.btn-opt{
  width: 100px;
  height: 100px;
  margin: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 2px solid $primary;
  color:  $primary;
  &:hover{
    background:  $secondary;
  color: white;
  border: 3px solid $secondary;
  cursor: pointer;

  }
}

@media (max-width: 414px) {
  .quadrado {
    justify-content: center;

  }
  .pagina {
    padding: 16px;
  }
  .texto {
    font-size: 24px;
    text-align: center;
  }
  p {
    text-align: center;
  }


}
</style>
