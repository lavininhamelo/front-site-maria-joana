<template>
 <q-layout class="bg" view="hHh lpR fFf" >

    <q-drawer show-if-above v-model="left" side="left"  >
      <MenuLateral />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

import MenuLateral from 'src/components/admin/MenuLateral.vue'

export default {
  components:{
    MenuLateral
  },
  data () {
    return {
      left: false
    }
  }
}
</script>
<style scoped lang="scss">
.bg{
  background: $beige;
}
</style>
