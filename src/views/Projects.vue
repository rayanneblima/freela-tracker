<template>
  <section class="projects">
    <h1 class="title">Projetos</h1>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Projects"
});
</script>

<style>
.projects {
  padding: 1.25rem;
}

.projects h1 {
  color: var(--primary-text);
}
</style>
