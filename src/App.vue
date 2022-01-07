<template>
  <main :class="{ 'dark-theme': darkTheme }">
    <div class="columns is-gapless is-marginless is-multiline">
      <div class="column is-one-fifth-widescreen">
        <AsideBar @onChangeTheme="handleChangeTheme" />
      </div>
      <div class="column is-four-fifth-widescreen content">
        <Notification />
        <router-view></router-view>
        <Footer />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AsideBar from "./components/AsideBar.vue";
import Notification from "./components/Notification.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",

  components: {
    AsideBar,
    Notification,
    Footer,
  },

  data() {
    return {
      darkTheme: false
    };
  },

  methods: {
    handleChangeTheme(darkTheme: boolean) {
      this.darkTheme = darkTheme;
    },
  },
});
</script>

<style>
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb:vertical,
::-webkit-scrollbar-thumb:horizontal {
  background: var(--light-violet);
  border-radius: 8px;
}

:root {
  --dark-blue: #3D405B;
  --orange: #E07A5F;
  --green: #00D1B2;
  --red: #F14668;
  --yellow: #FFE08A;
  --light-violet: #C8C9DC;
  --black: #313131;
  --white: #F2F2F2;
  --primary-text: #4A4A4A;
  --primary-bg: #ECE9EA;
}

main {
  --primary-bg: #ECE9EA;
  --primary-text: #4A4A4A;
  --footer-height: 40px;
}

main.dark-theme {
  --primary-bg: #4A4A4A;
  --primary-text: #ECE9EA;
}

.content {
  background: var(--primary-bg);
  min-height: calc(100vh - var(--footer-height));
  position: relative;
}

.task-list {
  padding: 1.25rem;
}

@media only screen and (max-width: 1150px) {
  main > div {
    flex-direction: column;
  }
}
</style>
