<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <!--스텝퍼 헤더 타이틀-->
      <v-stepper-step :complete="e1 > 1" step="1">
        Name of step 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        Name of step 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> Name of step 3 </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <!--스텝퍼내용-->
      <v-stepper-content step="1">
        <v-card class="mb-12" color="grey lighten-1" height="200px">
          <CheckBox />
        </v-card>

        <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>


<script>
import CheckBox from "./forms/CheckBox";

export default {
  name: "MainCont",
  components: {
    CheckBox,
  },
  data: () => ({
    e1: 1, //시작하는 단계 설정 e1:1 = 1단계가 펼쳐진 상태로 페이지 렌더링
  }),
};
</script>
