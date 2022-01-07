<template>
  <aside>
    <h1>
      <img src="../assets/logo.png" alt="FreelaTracker" />
    </h1>

    <div class="has-text-centered">
      <button class="button" @click="handleChangeTheme">
        <span class="icon">
          <i :class="`far fa-${darkTheme ? 'sun' : 'moon'}`"></i>
        </span>
        <span>Ativar {{ darkTheme ? 'modo claro' : 'modo escuro' }}</span>
      </button>
    </div>    

    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link :to="({ name: 'tasks' })" class="link">
            <span class="icon">
              <i class="fas fa-tasks"></i>
            </span>
            <span>
              Tarefas
            </span>    
          </router-link>
        </li>
        <li>
          <router-link :to="({ name: 'projectsList' })" class="link">
            <span class="icon">
              <i class="fas fa-project-diagram"></i>
            </span>
            <span>
              Projetos
            </span>    
          </router-link>
        </li>
      </ul>
    </nav>
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
  background: var(--dark-blue);
  
  height: 100vh;
  min-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1rem;
  width: 100%;
}

aside h1 {
  text-align: center;
}

aside img {
  max-width: 200px;
  width: 100%;
}

.panel li {
  margin: 8px 0;
}

.link {
  color: #fff;
}

.link:hover {
  color: #DCC8CC;
}

.li.router-link-active {
  color: #DCC8CC;
}

@media only screen and (max-width: 1150px) {
  aside {
    height: auto;
    width: 100vw;
  }
}
</style>