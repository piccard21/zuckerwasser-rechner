<template>
  <div id="app" class="bgMain">
    <!-- header -->
    <header class="header mb-4 overflow-hidden">
      <b-link :to="{ name: 'home' }">
        <b-jumbotron
          header="Zuckerwasser-Rechner"
          lead="Wieviel brauche ich nochmal von ...?"
          bg-variant="warning"
          text-variant="white"
          class="text-center logo mb-0"
        />
      </b-link>
    </header>

    <!-- main -->
    <b-container class="main">
      <router-view />
    </b-container>

    <footer>
      <div class="p-3 bg-warning">
        <b-link to="impressum">Impressum</b-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabItems: [
        {
          text: "Rechner",
          to: { name: "home" }
        },
        {
          text: "Tabelle",
          to: { name: "table" }
        }
      ],
      tabIndex: 0
    };
  }
};
</script>

<style lang="scss">
#app {
  // stretch body
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  .main {
    display: flex;
    flex: 1;

    .content {
      flex: 1;
    }
  }

  // effect logo
  header {
    a:link,
    a:visited,
    a:hover,
    a:active {
      text-decoration: none;
    }

    order: -1;
    &.focus,
    &:hover {
      .logo {
        transform: scale(1.2);
        &:before {
          display: block;
        }
      }
    }
    .logo {
      transition: all 0.5s;

      // effect logo overlay
      &::before {
        content: "";
        display: none;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }

  footer {
    a:link,
    a:visited,
    a:hover,
    a:active {
      color: #fff;
    }
  }

  @media (max-width: 767px) {
    .logo {
      h1 {
        font-size: 3.5rem;
      }
      p.lead {
        font-size: 1.2rem;
      }
    }
  }
  @media (min-width: 768px) {
    // logo background
    .logo {
      background-image: url("./assets/logo_bee.png");
      background-repeat: no-repeat;
      background-position: right top;
      background-size: auto 100%;
    }
    // content background
    &.bgMain {
      background-image: url("./assets/bees-honeycomb.png");
      background-repeat: no-repeat;
      background-position: right bottom;
    }
  }
}
</style>
