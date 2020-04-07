<template>
  <div>
    <div class="title"><b>Abdul Ghani</b></div>
    <v-row style="height: 110px;" no-gutters>
      <v-col
        class="bg-success"
        cols="12"
        sm="2"
      >
        <v-list-item class="mt-5" two-line>
          <v-list-item-content>
            <v-list-item-title class="mb-1 white--text text-center"><b>{{ $t('label.test_results') }}</b></v-list-item-title>
            <v-list-item-title
              class="mb-1 white--text text-center"
            >Negatif</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col
        class="bg-default"
        cols="12"
        sm="2"
      >
        <v-list-item class="mt-5" two-line>
          <v-list-item-content>
            <v-list-item-title class="mb-1 green--text"><b>{{ $t('label.rdt_code') }}</b></v-list-item-title>
            <v-list-item-title
              class="mb-1"
            >7689768969867896</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col
        class="bg-default"
        cols="12"
        sm="3"
      >
        <v-list-item class="mt-5" two-line>
          <v-list-item-content>
            <v-list-item-title class="mb-1 green--text"><b>{{ $t('label.faskes_name') }}</b></v-list-item-title>
            <v-list-item-title
              class="mb-1"
            >RSUD Kota Depok</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col
        class="bg-default"
        cols="12"
        sm="2"
      >
        <v-list-item class="mt-5" two-line>
          <v-list-item-content>
            <v-list-item-title class="mb-1 green--text"><b>{{ $t('label.goal_category') }}</b></v-list-item-title>
            <v-list-item-title
              class="mb-1"
            >Kategori B</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col
        class="bg-default"
        cols="12"
        sm="3"
      >
        <v-list-item class="mt-5" two-line>
          <v-list-item-content>
            <v-list-item-title class="mb-1 green--text"><b>{{ $t('label.check_date') }}</b></v-list-item-title>
            <v-list-item-title
              class="mb-1"
            >26 Maret 2020</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <v-row>
            <v-col
              cols="12"
              sm="3"
            >
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="mb-1 green--text"><b>{{ $t('label.nik') }}</b></v-list-item-title>
                  <v-list-item-title
                    class="mb-1"
                  >3037686867868</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="mb-1 green--text"><b>{{ $t('label.birth_date') }}</b></v-list-item-title>
                  <v-list-item-title
                    class="mb-1"
                  >23 Juni 1975</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="mb-1 green--text"><b>{{ $t('label.age') }}</b></v-list-item-title>
                  <v-list-item-title
                    class="mb-1"
                  >45 Tahun</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col
              cols="12"
              sm="3"
            >
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="mb-1 green--text"><b>{{ $t('label.gender') }}</b></v-list-item-title>
                  <v-list-item-title
                    class="mb-1"
                  >Laki-Laki</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="mb-1 green--text"><b>{{ $t('label.phone_number') }}</b></v-list-item-title>
                  <v-list-item-title
                    class="mb-1"
                  >0898765775566</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="mb-1 green--text"><b>{{ $t('label.citizen') }}</b></v-list-item-title>
                  <v-list-item-title
                    class="mb-1"
                  >Indonesia</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="mb-1 green--text"><b>{{ $t('label.address') }}</b></v-list-item-title>
                  <v-list-item-title
                    class="mb-1"
                  >Jl. Merdeka II No.18</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-btn
      class="float-right"
      color="#14a942"
      outlined
    >
      {{ $t('label.back') }}
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'DetailRdtPerorang'
}
</script>

<style>
.bg-success {
  background: linear-gradient(90deg, #219653 0%, #27AE60 100%);
  border-radius: 4px;
}
.bg-default {
  background: #FFFFFF;
}
</style>
