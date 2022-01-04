<template>
  <section class="has-text-right">
    <strong class="timer-display">{{ elapsedTime }}</strong>
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