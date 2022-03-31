<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <!--스텝퍼 헤더 타이틀-->
      <v-stepper-step :complete="e1 > 1" step="1">
        농장기초정보
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"> 농장정보 </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> 주소 정보</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4"> 연락처 정보</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <form>
        <!--스텝퍼내용-->
        <v-stepper-content step="1" class="blue lighten-5 pa-3">
          <v-card class="mb-3 pa-5">
            <v-container>
              <v-row>
                <v-col cols="12" sm="3" md="3">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="등록일자"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @input="menu2 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field label="농장명"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field label="대표자명"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field label="사업자등록번호"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-select :items="items1" label="업종"></v-select>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-select :items="items2" label="업태"></v-select>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-select :items="items3" label="업체유형"></v-select>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field label="법인등록번호"></v-text-field>
                </v-col>

                <v-col cols="12" sm="3" md="3">
                  <v-text-field label="축산업등록번호"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field label="식약처 인허가번호"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field label="농장식별번호"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card>

          <v-btn text> 취소 </v-btn>
          <v-btn color="primary" @click="e1 = 2"> 다음 </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2" class="blue lighten-5 pa-3">
          <v-card class="mb-3 pa-5">
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-select
                    v-model="value"
                    :items="items4"
                    small-chips
                    label="농장구분"
                    multiple
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field
                    label="농장총면적"
                    suffix="㎡"
                    class="text-right"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field
                    label="계사총면적"
                    suffix="㎡"
                    class="text-right"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field
                    label="사무실면적"
                    suffix="㎡"
                    class="text-right"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field
                    label="사료보관능력"
                    suffix="㎏"
                    class="text-right"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field
                    label="계분처리능력"
                    suffix="㎏"
                    class="text-right"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field
                    label="집란처리능력"
                    suffix="h"
                    class="text-right"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field
                    label="알보관능력"
                    suffix="h"
                    class="text-right"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card>

          <v-btn text @click="e1 = 1"> 이전 </v-btn>
          <v-btn color="primary" @click="e1 = 3"> 다음 </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3" class="blue lighten-5 pa-3">
          <v-card class="mb-3 pa-5">
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="주소"
                    append-outer-icon="mdi-map-marker"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field label="상세주소"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field label="우편번호" disabled></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field label="법정동코드" disabled></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field label="GPS X좌표" disabled></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field label="GPS Y좌표" disabled></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card>

          <v-btn text @click="e1 = 2"> 이전 </v-btn>
          <v-btn color="primary" @click="e1 = 4"> 다음 </v-btn>
        </v-stepper-content>
        <v-stepper-content step="4" class="blue lighten-5 pa-3">
          <v-card class="mb-3 pa-5">
            <v-container>
              <v-row>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field label="전화번호"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field label="휴대폰번호"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field label="팩스번호"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field label="이메일" :rules="rules"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card>

          <v-btn text @click="e1 = 3"> 이전 </v-btn>

          <v-btn color="primary" @click="send"> 저장 </v-btn>
        </v-stepper-content>
      </form>
    </v-stepper-items>
  </v-stepper>
</template>


<script>
export default {
  name: "FarmBasicInfo",

  data: () => ({
    e1: 1, //시작하는 단계 설정 e1:1 = 1단계가 펼쳐진 상태로 페이지 렌더링
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu2: false,
    items1: ["업종1", "업종2", "업종3", "업종4"],
    items2: ["업태1", "업태2", "업태3", "업태4"],
    items3: ["업체유형1", "업체유형2", "업체유형3", "업체유형4"],
    items4: ["산란계 (일반란)", "산란계(자연란)", "부화장", "종계", "육계"],
  }),
};
</script>

<style>
.v-card {
  min-height: 350px;
}
</style>
