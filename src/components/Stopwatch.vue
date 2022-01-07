<template>
  <section>
    <span class="icon">
      <i class="far fa-clock"></i>
    </span>
    <strong class="timer-display" :style="{ 'color': color }">{{ elapsedTime }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Stopwatch",

  props: {
    secondsTime: {
      default: 0,
      required: true,
      type: Number
    },

    color: {
      default: '',
      required: false,
      type: String
    }
  },

  computed: {
    elapsedTime (): string {
      return new Date(this.secondsTime * 1000).toISOString().substr(11, 8);
    }
  }
});
</script>

<style>
.timer-display {
  color: var(--primary-text);
}
</style>