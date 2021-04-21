<template>
  <div class="bg full-height column q-pa-lg text-primary justify-between ">
    <div class="artist column text-primary">
      <img src="https://i.imgur.com/9S9In73.png" alt="Foto de Perfil" width="80">
      <span class="text-bold q-mt-md">Maria Joana</span>
      <span>mariajoana@govegan.com</span>
      <span class="text-bold cursor-pointer">Logout</span>
    </div>

  <div class="row">
     <div class="list column justify-between q-pb-xl  ">
         <div class="item" :class="$route.path == '/admin/' || '' ? 'selected':'' " @click="go('')">Home</div>
         <div class="item" :class="$route.path == '/admin/sobre' ? 'selected':'' " @click="go('sobre')">Sobre</div>
         <div class="item" :class="$route.path == '/admin/produtos' ? 'selected':'' " @click="go('produtos')">Produtos</div>
         <div class="item" :class="$route.path == '/admin/cursos' ? 'selected':'' " @click="go('cursos')">Cursos</div>
         <div class="item" :class="$route.path == '/admin/contatos' ? 'selected':'' " @click="go('contatos')">Contato</div>
     </div>
     <div class="separator"></div>
  </div>
  <q-btn color="primary"  label="Ver site" @click="$router.push('/')" />
  </div>
  
  
</template>

<script>
  export default {
    data() {
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
</script>

<style lang="scss" scoped>
.item{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  color: $secondary;
  align-items: center;
  text-align: center;
}

.separator {
    width: 2px;
    height: 50vh;
    background: $secondary;
}

.list {
    align-items: flex-start;
    cursor: pointer;
    height: 50vh;
    flex: 1;
}

.selected{
  color: $primary;
}

.bg{
  background: $beige;
}
</style>