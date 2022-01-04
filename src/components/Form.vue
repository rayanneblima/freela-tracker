<template>
  <div class="box is-radiusless form">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          v-model="taskDescription"
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
        />
      </div>
      <div class="column">
        <Timer @onTimerStops="handleTaskFinished" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Timer from './Timer.vue';

export default defineComponent({
  name: "Form",

  components: {
    Timer
  },

  emits: ['onSaveTask'],

  data () {
    return {
      taskDescription: ''
    }
  },

  methods: {
    handleTaskFinished (elapsedTime: number): void {
      this.$emit('onSaveTask', {
        duration: elapsedTime,
        description: this.taskDescription
      });
      this.taskDescription = '';
    }
  }
});
</script>

<style>
.form {
  background: var(--primary-bg);
  color: var(--primary-text);
}
</style>