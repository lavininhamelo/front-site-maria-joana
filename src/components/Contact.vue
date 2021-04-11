<template>
  <div class="contato full-width container">
    <div class="email">
      <h2>Entre em contato</h2>
      <q-input
        v-model="text"
        type="text"
        label="Nome"
        outlined
        class="q-mb-lg"
      />
      <q-input
        v-model="text"
        type="text"
        label="Assunto"
        outlined
        class="q-mb-lg"
      />
      <q-input
        v-model="text"
        type="mail"
        label="E-mail"
        outlined
        class="q-mb-lg"
      />
      <q-input
        v-model="text"
        label="Deixe sua mensaagem aqui"
        outlined
        class="q-mb-lg"
        type="textarea"
      />
      <q-btn
        color="primary"
        icon-right="mail"
        label="Enviar"
        class="full-width botao"
      />
    </div>

    <div class="whatsapp ">
      <h2>WhatsApp</h2>
      <div class="row">
        <img src="~/assets/whatsapp.png" alt="whatsapp" class="q-mr-md" />
        <span>(67) 9 9845-6657</span>
      </div>
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
.contato {
  height: 600px;
  display: flex;
  justify-content: space-between;
}

.whatsapp {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
}

.email {
  flex: 1;
}

h2 {
  font-family: "Slabo 13px", serif;
  font-size: 36px;
}

.botao {
  width: 410px;
  height: 40px;
}
</style>
