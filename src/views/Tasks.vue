<template>
  <div>
    <Form @onSaveTask="handleSaveTask" />

    <div class="task-list">
      <template v-if="!emptyTaskList">
        <Task v-for="(task, index) in tasks" :key="index" :task="task" />
      </template>

      <TaskBox v-else> 😔 Você ainda não iniciou tarefas hoje. </TaskBox>
    </div> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Form from "../components/Form.vue";
import Task from "../components/Task.vue";
import TaskBox from "../components/TaskBox.vue";

import ITask from "../interfaces/ITask";

export default defineComponent({
  name: "Tasks",

  components: {
    Form,
    Task,
    TaskBox
  },

  data() {
    return {
      tasks: [] as ITask[]
    };
  },  

  computed: {
    emptyTaskList(): boolean {
      return !this.tasks.length;
    },
  },

  methods: {
    handleSaveTask(task: ITask) {
      this.tasks.unshift(task);
    }
  }
});
</script>

<style scoped>
.task-list {
  margin-bottom: 40px;
}
</style>