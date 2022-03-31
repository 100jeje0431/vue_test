<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <!-- <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col> -->
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterBot",

  data: () => ({
    links: [
      "농장현황대쉬보드",
      "농장관리",
      "거래관리",
      "이력제신고",
      "HACCP관리",
      "보고서출력",
      "기초정보등록",
    ],
  }),
};
</script>
