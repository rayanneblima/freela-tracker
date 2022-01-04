<template>
  <aside>
    <h1>
      <img src="../assets/logo.png" alt="FreelaTracker" />
    </h1>
    <button class="button" @click="handleChangeTheme">
      <span class="icon">
        <i :class="`far fa-${darkTheme ? 'sun' : 'moon'}`"></i>
      </span>
      <span>Ativar {{ darkTheme ? 'modo claro' : 'modo escuro' }}</span>
    </button>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AsideBar',

  data () {
    return {
      darkTheme: false
    }
  },

  methods: {
    handleChangeTheme ()  {
      this.darkTheme = !this.darkTheme;
      this.$emit('onChangeTheme', this.darkTheme);
    }
  }
});
</script>

<style scoped>
aside {
  background: #892a3d;
  
  height: calc(100vh - var(--footer-height));
  min-height: 100%;
  padding: 1rem;
  text-align: center;
  width: 100%;
}

aside img {
  max-width: 260px;
}

@media only screen and (max-width: 768px) {
  aside {
    height: auto;
    padding: 2.5rem;
  }
}
</style>