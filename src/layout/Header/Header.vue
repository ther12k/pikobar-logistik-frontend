<!-- Header Structure -->
<template>
  <div>
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      app
      overflow
    >
      <app-sidebar />
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="primaryDrawer.clipped"
      app
    >
      <div class="title-app">
        <img src="static/login/logo.svg">
      </div>
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      />
      <v-spacer />
      <v-switch
        id="changeTemplateColor"
        v-model="$vuetify.theme.dark"
        inset
        class="dark-mode"
        style="padding-top: 1.4rem;"
        @change="emitDarkMode">
        <template #prepend>
          <v-label style="font-size: 14px !important; min-width: 5rem !important;">{{ $t('label.dark_mode') }}</v-label>
        </template>
      </v-switch>
      <div>
        <v-btn
          v-for="entry in languages"
          id="changeLanguage"
          :key="entry.title"
          tile
          icon
          @click="changeLanguage(entry.language)"
        >
          <flag :iso="entry.flag" :squared="false" />
        </v-btn>
      </div>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            large
            v-on="on"
          >
            <div class="drop-menu">
              <img width="30px" height="30px" src="https://cdn.vuetifyjs.com/images/logos/logo.svg" class="rounded-circle">
            </div>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/users/user-profile">
            <v-icon class="mr-3 font-lg text-gray">ti-user</v-icon>
            <v-list-item-title>View Profile</v-list-item-title>
          </v-list-item>
          <v-list-item id="logoutBottom" @click.native="logout">
            <v-icon class="mr-3 font-lg text-gray">ti-power-off</v-icon>
            <v-list-item-title>Log Out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
/* eslint-disable */
import Sidebar from "../Sidebar/Sidebar.vue"
import EventBus from "@/utils/eventBus"

export default {
  components: {
    appSidebar: Sidebar
  },
  data() {
    return {
      customizerIn: false, // customizer
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: true,
        floating: false,
        mini: false,
      },
      footer: {
        inset: false,
      },
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      messages: 10,
      itemsNotifications: [
        {
          title: "Total App Memory",
          icon: "storage"
        },
        {
          title: "Total Memory Used",
          icon: "memory"
        },
        {
          title: "12 Unread Mail",
          icon: "mail"
        },
        {
          title: "Feedback",
          icon: "feedback"
        }
      ],
      languages: [
        { flag: 'us', language: 'en', title: 'English' },
        { flag: 'id', language: 'id', title: 'Indonesia' }
      ]
    };
  },
  computed: {
    //
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    emitDarkMode: function(isDarkMode) {
      EventBus.$emit("darkMode", isDarkMode);
    },
    // change language
    changeLanguage: function(lang) {
      this.$i18n.locale = lang
    }
  }
};
</script>
