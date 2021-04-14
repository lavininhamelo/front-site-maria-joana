<template>
  <div class="menu container">
    <div class="logo size cursor-pointer" @click="go('/')">
      <img src="~/assets/logo.png" alt="Logo Maria Joana" />
    </div>
    <ul class="link cursor-pointer">
      <li @click="go('/')">Início</li>
      <li @click="go('/sobre')">Sobre</li>
      <li @click="go('/produtos')">Produtos</li>
      <li @click="go('/cursos')">Cursos</li>
      <router-link to="#contact" @click.native="scrollFix('#contact')">
        <li>Contato</li></router-link
      >
    </ul>
    <div class="icons cursor-pointer size row justify-end">
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
    },
    scrollFix: function(hashbang) {
      location.href = hashbang;
    },
    refresh() {
      this.$router.go("/");
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #000;
}
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
