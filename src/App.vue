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

      <!--양쪽으로 밀어주는 역할-->
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col cols="12" sm="2" md="2" id="sidemenu">
            <SideMenu />
          </v-col>
          <v-col cols="12" sm="9" md="9" id="sidemenu">
            <MainCont />
          </v-col>
        </v-row>
      </v-container>

      <div id="footer">
        <FooterBot />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import SideMenu from "./components/SideMenu";
import MainCont from "./components/MainCont";
import FooterBot from "./components/FooterBot";

export default {
  name: "App",

  components: {
    SideMenu,
    MainCont,
    FooterBot,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#sidemenu {
  margin-right: 10px;
}

#footer {
  position: absolute;
  width: 100%;
  bottom: 0;
}
.container {
  display: flex;
  margin-left: 0;
  padding-left: 2px;
}
</style>
