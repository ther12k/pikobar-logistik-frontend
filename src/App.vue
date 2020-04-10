<template>
  <v-app
    id="inspire"
  >
    <toast-notification />
    <template v-if="$store.state.general.isLoading">
      <!-- Loader -->
      <div class="spinwrap">
        <div class="spinner">
          <lottie :options="lottieOptions" :width="100" :height="100" />
        </div>
      </div>
    </template>
    <template v-else>
      <router-view />
    </template>
  </v-app>
</template>

<script>
import Lottie from 'vue-lottie'
import animationLoading from '@/static/logistik_loader.json'

export default {
  name: 'App',
  components: {
    Lottie
  },
  data() {
    return {
      lottieOptions: { animationData: animationLoading, loop: true }
    }
  }
}
</script>
