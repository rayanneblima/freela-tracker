<template>
  <footer>
    Freela<b>Tracker</b> - created by
    <a href="http://rayanneblima.github.io/" target="_blank">
      Rayanne B. Lima
    </a>
    with 💖
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Footer'
});
</script>

<style>
footer {
  background: var(--primary-bg);
  color: var(--primary-text);
  
  align-items: center;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  height: var(--footer-height);
  justify-content: center;
  position: relative;
  width: 100%;
}

footer a {
  margin-inline: 4px;
}
</style>