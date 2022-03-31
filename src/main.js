import "@mdi/font/css/materialdesignicons.css"; // 아이콘
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify"; //플러그인 뷰티파이
import Vuetify from "vuetify/lib"; // 아이콘

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(require("vue-moment")); // 캘린더

Vue.use(Vuetify); // 아이콘

export default new Vuetify({
  // 아이콘
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
});
