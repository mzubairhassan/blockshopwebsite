<template>
  <div id="app">
    <b-container>
      <b-navbar toggleable="lg" type="light" variant="" class="mt-2">
        <b-navbar-brand href="#">
          <b-img :src="require('./assets/blockShop.png')"></b-img>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="b-nav-item" href="#">SERVICES</b-nav-item>
            <b-nav-item class="b-nav-item" href="#">ABOUT</b-nav-item>
            <b-nav-item class="b-nav-item" href="#">WORK</b-nav-item>
            <b-nav-item class="b-nav-item" href="#">BLOG</b-nav-item>
            <b-nav-item class="b-nav-item" href="#">CONNECT</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
    <BlockshopHome />
  </div>
</template>
<script>
import BlockshopHome from "./components/BlockshopHome.vue";
// import BlockshopMobileHome from './components/BlockshopMobileHome.vue'
// import BlockshopMobileServices from './components/BlockshopMobileServices.vue'
export default {
  name: "App",
  components: {
    BlockshopHome,
  },
};
</script>
<style lang="scss" scoped>
$font-dir: "./assets/fonts/";

@font-face {
  font-family: "Alegreya Sans";
  src: url("#{$font-dir}AlegreyaSans/AlegreyaSansRegular.ttf")
    format("truetype");
  font-style: normal;
  font-weight: normal;
}

.b-nav-item {
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 10vh;
  opacity: 1;
  /* identical to box height */
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #34304e;
}

#blockshop-mobile {
  padding: 20px 0 0 0;

  ul {
    list-style: none;
    width: 200px;
    padding-left: 40px;

    li {
      a {
        margin-bottom: 20px;
        cursor: pointer;

        font-family: Josefin Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 10vh;

        /* identical to box height */
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #34304e;

        &:hover {
          color: blueviolet;
        }
      }
    }
  }

  .logo {
    width: 95px;
    height: 19px;
    background-image: url("./assets/blockShop.png");
    margin: 15px 200px 16px 20px;
    float: left;
  }
}
</style>
