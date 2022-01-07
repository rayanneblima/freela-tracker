<template>
  <TaskBox :bgColor="task.color">
    <div class="columns" :style="{ 'color': fontColor }">
      <div class="column is-7 has-text-weight-normal description">
        <div class="row">
          <b>Projeto:</b> {{ project.name }}
        </div>
        <div class="row">
          <b>Tarefa:</b> {{ task.description }}  
        </div>
      </div>
      <div class="column is-5 has-text-right">
        <div class="row">
          <Stopwatch :secondsTime="task.duration" :color="fontColor" />
        </div>
        <div class="row">
          {{ task.conclusionDate }}
        </div>
      </div>
    </div>
  </TaskBox>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { fontColorUtils } from "../utils";
import { RUseStore } from "../store";
import ITask from '../interfaces/ITask';
import TaskBox from './TaskBox.vue';
import Stopwatch from './Stopwatch.vue';

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
  },

  setup() {
    const store = RUseStore();
    return {
      projects: computed(() => store.state.projects)
    };
  },

  computed: {
    project () {
      return this.projects.find(proj => proj.id === String(this.task.project));
    },

    fontColor () {
      const colorType = fontColorUtils(this.task.color);  
      return colorType === 'dark' ? '#f2f2f2' : '#313131';
    }
  }
});
</script>

<style scoped>
.description {
  overflow-wrap: anywhere;
}
</style>
