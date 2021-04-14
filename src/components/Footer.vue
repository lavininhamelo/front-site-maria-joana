<template>
  <footer class="column">
    <div class="footer container">
      <div class="itemFooter">
        <div class="logoItem" @click="go('/')">
          <img src="~/assets/SVG/logo.svg" alt="logo" />
        </div>
        <ul class="link">
          <li @click="go('/')">Início</li>
          <li @click="go('/sobre')">Sobre</li>
          <li @click="go('/produtos')">Produtos</li>
          <li @click="go('/cursos')">Cursos</li>
          <router-link to="#contact" @click.native="scrollFix('#contact')">
            <li>Contato</li></router-link
          >
        </ul>
        <span></span>
      </div>
    </div>
    <div class="texto ">
      <strong>Maria Joana </strong> - Todos os direitos reservados &copy; 2021
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollFix: function(hashbang) {
      location.href = hashbang;
    },
    go(value) {
      this.$router.push(value);
    },
    refresh() {
      this.$router.go("/");
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  background-color: $lemon-light;
}

a {
  text-decoration: none;
  color: #000;
}

.texto {
  background-color: $lemon;
  color: #fffdfd;
  justify-content: center;
  align-items: center;
  height: 40px;
  display: flex;
}
.footer {
  // background-color: #64743f;

  .itemFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;

    .link {
      display: flex;
      flex-direction: row;
      width: 500px;
      justify-content: space-between;
    }

    ul {
      cursor: pointer;
      padding: 0px;
      li {
        font-size: 16px;
        font-family: "Slabo 13px", serif;
        color: #fffdfd;
        list-style-type: none;
      }
    }

    .logo {
      width: 30px;
      height: 30px;
      margin-top: 35px;
    }
  }
}
</style>
