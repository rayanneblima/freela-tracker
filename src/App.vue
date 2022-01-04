<template>
  <main :class="{ 'dark-theme': darkTheme }">
    <div class="columns is-gapless is-marginless is-multiline">
      <div class="column is-one-quarter-widescreen">
        <AsideBar @onChangeTheme="handleChangeTheme" />
      </div>
      <div class="column is-three-quarter-widescreen content">
        <Form @onSaveTask="handleSaveTask" />

        <div class="task-list">
          <template v-if="!emptyTaskList">
            <Task v-for="(task, index) in tasks" :key="index" :task="task" />
          </template>

          <TaskBox v-else> 😔 Você ainda não iniciou tarefas hoje. </TaskBox>
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AsideBar from "./components/AsideBar.vue";
import Form from "./components/Form.vue";
import Task from "./components/Task.vue";
import TaskBox from "./components/TaskBox.vue";
import Footer from "./components/Footer.vue";

import ITask from "./interfaces/ITask";

export default defineComponent({
  name: "App",

  components: {
    AsideBar,
    Form,
    Task,
    TaskBox,
    Footer,
  },

  data() {
    return {
      darkTheme: false,
      tasks: [] as ITask[],
    };
  },

  computed: {
    emptyTaskList(): boolean {
      return !this.tasks.length;
    },
  },

  methods: {
    handleSaveTask(task: ITask) {
      this.tasks.push(task);
    },

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
  background: #892a3d;
  border-radius: 8px;
}

main {
  --primary-bg: #f2f2f2;
  --primary-text: #313131;
  --footer-height: 60px;
}

main.dark-theme {
  --primary-bg: #313131;
  --primary-text: #f2f2f2;
}

.content {
  background: var(--primary-bg);
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
