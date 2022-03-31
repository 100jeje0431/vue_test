<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <h2>KOKOBOT</h2>
      </div>

      <v-spacer></v-spacer>
      <!--양쪽으로 밀어주는 역할-->

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-icon>mdi-open-in-new</v-icon>
    </v-app-bar>

    <v-main class="grey lighten-5 overflow-auto">
      <div id="sidemenu">
        <SideMenu />
      </div>
      <div id="contentBox">
        <FarmBasicInfo />
      </div>
    </v-main>

    <div id="footer">
      <FooterBot />
    </div>
  </v-app>
</template>

<script>
import SideMenu from "./components/SideMenu";
import FooterBot from "./components/FooterBot";
import FarmBasicInfo from "./components/farm/FarmBasicInfo";

export default {
  name: "App",

  components: {
    SideMenu,
    FooterBot,
    FarmBasicInfo,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  overflow: auto;
}
#sidemenu {
  margin-right: 10px;
  position: absolute;
  z-index: 100;
  left: 2px;
  top: 6px;
}

#contentBox {
  margin-top: 6px;
  margin-bottom: 104px;
  margin-left: 310px;
}

#footer {
  position: fixed;
  width: 100%;
  bottom: 0;
}
.container {
  display: flex;
  margin-left: 0;
  padding-left: 2px;
}
</style>
