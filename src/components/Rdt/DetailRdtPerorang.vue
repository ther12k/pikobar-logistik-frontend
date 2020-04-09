<template>
  <div>
    <div class="title"><b>Abdul Ghani</b></div> <!-- To do: get data from api -->
    <v-row no-gutters>
      <v-col
        class="bg-success"
        cols="12"
        sm="2"
      >
        <v-card
          class="mx-auto bg-success"
        >
          <v-card-text>
            <div class="subtitle-1 white--text text-center">
              <b>{{ $t('label.test_results') }}</b>
            </div>
            <div class="white--text text-center">
              <b>Negatif</b> <!-- To do: get data from api -->
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        class="bg-default"
        cols="12"
        sm="2"
      >
        <v-card
          class="mx-auto"
          color="white"
        >
          <v-card-text>
            <div class="subtitle-1 green--text">
              <b>{{ $t('label.rdt_code') }}</b>
            </div>
            <div>
              <b>656758765876567858</b> <!-- To do: get data from api -->
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        class="bg-default"
        cols="12"
        sm="3"
      >
        <v-card
          class="mx-auto"
          color="white"
        >
          <v-card-text>
            <div class="subtitle-1 green--text">
              <b>{{ $t('label.faskes_name') }}</b>
            </div>
            <div>
              <b>RSUD Kota Depok</b> <!-- To do: get data from api -->
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        class="bg-default"
        cols="12"
        sm="2"
      >
        <v-card
          class="mx-auto"
          color="white"
        >
          <v-card-text>
            <div class="subtitle-1 green--text">
              <b>{{ $t('label.goal_category') }}</b>
            </div>
            <div>
              <b>Kategori B</b> <!-- To do: get data from api -->
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        class="bg-default"
        cols="12"
        sm="3"
      >
        <v-card
          class="mx-auto"
          color="white"
        >
          <v-card-text>
            <div class="subtitle-1 green--text">
              <b>{{ $t('label.check_date') }}</b>
            </div>
            <div>
              <b>26 Maret 2020</b> <!-- To do: get data from api -->
            </div>
          </v-card-text>
        </v-card>
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
              <v-card
                class="mx-auto"
                color="white"
              >
                <v-card-text>
                  <div class="subtitle-1 green--text">
                    <b>{{ $t('label.nik') }}</b>
                  </div>
                  <div>
                    <b>3037686867868</b> <!-- To do: get data from api -->
                  </div>
                </v-card-text>
              </v-card>
              <v-card
                class="mx-auto"
                color="white"
              >
                <v-card-text>
                  <div class="subtitle-1 green--text">
                    <b>{{ $t('label.birth_date') }}</b>
                  </div>
                  <div>
                    <b>23 Juni 1975</b> <!-- To do: get data from api -->
                  </div>
                </v-card-text>
              </v-card>
              <v-card
                class="mx-auto"
                color="white"
              >
                <v-card-text>
                  <div class="subtitle-1 green--text">
                    <b>{{ $t('label.age') }}</b>
                  </div>
                  <div>
                    <b>45 Tahun</b> <!-- To do: get data from api -->
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="3"
            >
              <v-card
                class="mx-auto"
                color="white"
              >
                <v-card-text>
                  <div class="subtitle-1 green--text">
                    <b>{{ $t('label.gender') }}</b>
                  </div>
                  <div>
                    <b>Laki-Laki</b> <!-- To do: get data from api -->
                  </div>
                </v-card-text>
              </v-card>
              <v-card
                class="mx-auto"
                color="white"
              >
                <v-card-text>
                  <div class="subtitle-1 green--text">
                    <b>{{ $t('label.phone_number') }}</b>
                  </div>
                  <div>
                    <b>0898765775566</b> <!-- To do: get data from api -->
                  </div>
                </v-card-text>
              </v-card>
              <v-card
                class="mx-auto"
                color="white"
              >
                <v-card-text>
                  <div class="subtitle-1 green--text">
                    <b>{{ $t('label.citizen') }}</b>
                  </div>
                  <div>
                    <b>Indonesia</b> <!-- To do: get data from api -->
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-card
                class="mx-auto"
                color="white"
              >
                <v-card-text>
                  <div class="subtitle-1 green--text">
                    <b>{{ $t('label.address') }}</b>
                  </div>
                  <div>
                    <b>Jl. Merdeka II No.18</b> <!-- To do: get data from api -->
                  </div>
                </v-card-text>
              </v-card>
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
  border: 0px !important;
}
.bg-default {
  background: #FFFFFF;
}
</style>
