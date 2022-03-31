<template>
  <v-card width="300" height="810" class="overflow-auto">
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>홈</v-list-item-title>
      </v-list-item>

      <v-list-group :value="true" prepend-icon="mdi-account-circle">
        <template v-slot:activator>
          <v-list-item-title>기초정보등록</v-list-item-title>
        </template>

        <v-list-group :value="true" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>농장정보등록</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>계사동정보등록</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "SideMenu",

  data: () => ({
    admins: [
      ["농장기초정보", "mdi-account-multiple-outline"],
      ["시설정보", "mdi-cog-outline"],
      ["인증정보", "mdi-file-outline"],
      ["차량정보", "mdi-car-outline"],
      ["직원정보", "mdi-account-outline"],
    ],
    cruds: [
      ["계사동 정보", "mdi-plus-outline"],
      ["시설 정보", "mdi-file-outline"],
      ["환경센서", "mdi-update"],
      ["환경제어", "mdi-delete"],
      ["생산정보", "mdi-delete"],
      ["급이정보", "mdi-delete"],
      ["영상정보", "mdi-delete"],
    ],
  }),
};
</script>
