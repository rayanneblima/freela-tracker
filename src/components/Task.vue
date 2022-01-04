<template>
  <TaskBox>
    <div class="columns">
      <div class="column is-7 description">
        {{ task.description || '🚫 Tarefa sem descrição' }}  
      </div>
      <div class="column is-5">
        <Stopwatch :secondsTime="task.duration" />
      </div>
    </div>
  </TaskBox>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TaskBox from './TaskBox.vue';
import Stopwatch from './Stopwatch.vue';
import ITask from '../interfaces/ITask';

export default defineComponent({
  name: "Task",

  components: {
    TaskBox,
    Stopwatch
  },

  props: {
    task: {
      default: () => ({}),
      required: true,
      type: Object as PropType<ITask>
    }
  }
});
</script>

<style scoped>
.description {
  overflow-wrap: anywhere;
}
</style>
