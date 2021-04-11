<template>
  <div class="menu container">
    <div class="logo size">
      <img src="~/assets/logo.png" alt="Logo Maria Joana" />
    </div>
    <ul class="link">
      <li @click="go('/')">Ínicio</li>
      <li @click="go('/sobre')">Sobre</li>
      <li @click="go('/produtos')">Produtos</li>
      <li @click="go('/cursos')">Cursos</li>
      <li>Contato</li>
    </ul>
    <div class="icons size row justify-end">
      <img
        src="~/assets/admin.png"
        alt="Seção de Admin"
        class="admin"
        height="18"
      />
      <img src="~/assets/whatsapp.png" alt="Whatsapp" height="18" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    go(value) {
      this.$router.push(value);
    }
  }
};
</script>

<style lang="scss" scoped>
.size {
  width: 150px;
}

.menu {
  background: $beige;
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .link {
    display: flex;
  }

  .admin {
    margin-right: 16px;
  }

  ul {
    margin: 0px;
    padding: 0px;
    li {
      list-style-type: none;
      margin: 0 16px;
    }
  }
}
</style>
