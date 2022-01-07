<template>
  <div class="box has-text-weight-bold" :style="{ 'backgroundColor': bgColor }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "TaskBox",

  props: {
    bgColor: {
      default: "var(--orange)",
      required: false,
      type: String
    }
  }
});
</script>
