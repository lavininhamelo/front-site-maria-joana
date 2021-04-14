<template>
  <div class="contact-body  full-width ">
    <div class="contato container">
      <div class="email">
        <h2>Entre em contato</h2>
        <q-input
          v-model="name"
          type="text"
          label="Nome"
          outlined
          class="q-mb-lg"
        />
        <q-input
          v-model="subject"
          type="text"
          label="Assunto"
          outlined
          class="q-mb-lg"
        />
        <q-input
          v-model="email"
          type="mail"
          label="E-mail"
          outlined
          class="q-mb-lg"
        />
        <q-input
          v-model="message"
          label="Deixe sua mensagem aqui"
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

      <div class="whatsapp column justify-start ">
        <div class="column ">
          <h2>WhatsApp</h2>
          <div class="row">
            <img src="~/assets/whatsapp.png" alt="whatsapp" class="q-mr-md" />
            <span>(67) 9 9845-6657</span>
          </div>
        </div>
        <div class="q-mt-xl full-width  row justify-end">
          <img src="~/assets/SVG/contato.svg" alt="whatsapp" class="q-mr-md" />
        </div>
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
      name: "",
      subject: "",
      email: "",
      message: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.contact-body {
  background-color: $beige;

  background-image: url("~assets/bg_contact.svg");
  background-repeat: no-repeat;
  background-size: contain;

  background-position-y: bottom;
}
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
