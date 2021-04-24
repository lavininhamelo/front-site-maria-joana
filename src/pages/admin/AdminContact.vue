<template>
  <q-page class="column q-px-xl">
    <Header
      title="Contato"
      subtitle="Nessa área você pode alterar o número de contato"
    ></Header>

    <div class="campo row full-width items-end">
      <q-input v-model="contacts.whatsapp" class="qinput" type="text" label="Whatsapp" />
      <q-btn class="botao" color="primary" label="Editar" @click="alterarContato" />
    </div>


    <div class="campo row full-width items-end">
      <q-input v-model="contacts.email" class="qinput" type="text" label="E-mail" />
      <q-btn class="botao" color="primary" label="Editar" @click="alterarContato"  />
    </div>

  </q-page>
</template>

<script>
import Header from "src/components/admin/Header.vue";
import axios from "axios"
export default {
  components: {
    Header,
  },
  data() {
    return {
      contacts: {
        whatsapp: "21551933820",
        email: "contato@mariajoana.com.br",
      },
    };
  },
  methods: {
    async alterarContato(){

        this.$q
        .dialog({
          title: "Alterar esse dado?",
          message: "Você deseja realmente alterar esse dado?",
          cancel: true,
          persistent: true,
        })
        .onOk(async () => {
         
        const data = {
          whatsapp: this.contacts.whatsapp,
          email: this.contacts.email
        }
        await axios.put('http://localhost:3000/contacts', data)
         this.$q.notify({
          color: 'positive',
          message: "Ação realizada com sucesso"
        })
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        });
      
    }
  }
};
</script>

<style lang="scss" scoped>
.separador-lateral {
  background-color: $secondary;
  width: 736px;
  height: 2px;
}
.item {
  font-size: 24px;
  font-weight: bold;
  color: $primary;
}
.campo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 48px;

}
.botao {
  align-items: flex-end;
  width: 80px;
  height: 36px;
}

.qinput{
    display: flex;
    flex: 1;
    margin-right: 16px;
}
</style>