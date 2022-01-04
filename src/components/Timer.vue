<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Stopwatch :secondsTime="secondsTime" />

    <div class="div-buttons">
      <button
        class="button is-primary"
        @click="handlePlay"
        :disabled="disabled"
      >
        <span class="icon">
          <i class="fas fa-play"></i>
        </span>
        <span>play</span>
      </button>
      <button
        class="button is-danger"
        @click="handleStop"
        :disabled="!disabled"
      >
        <span class="icon">
          <i class="fas fa-stop"></i>
        </span>
        <span>stop</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Stopwatch from "./Stopwatch.vue";

export default defineComponent({
  name: "Timer",

  components: {
    Stopwatch,
  },

  emits: ["onTimerStops"],

  data() {
    return {
      secondsTime: 0,
      stopwatchId: 0,
      disabled: false,
    };
  },

  methods: {
    handlePlay() {
      this.disabled = true;
      this.stopwatchId = setInterval(() => (this.secondsTime += 1), 1000);
    },

    handleStop() {
      this.disabled = false;
      clearInterval(this.stopwatchId);
      this.$emit("onTimerStops", this.secondsTime);
      this.secondsTime = 0;
    },
  },
});
</script>

<style scoped>
.div-buttons {
  display: flex;
  gap: 20px; 
}
</style>