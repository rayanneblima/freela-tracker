<template>
  <footer>
    <span>
      <span class="logo">Freela<b>Tracker</b></span> - created by
      <a href="http://rayanneblima.github.io/" target="_blank">
        Rayanne B. Lima
      </a>
      with 💖
    </span>
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
  
  bottom: 0;
  height: var(--footer-height);
  vertical-align: middle;
  position: absolute;
  width: 100%;
}

footer span {
  padding-left: 20px;
}

footer .logo,
footer a {
  color: var(--orange);
}

footer a {
  margin-inline: 4px;
}

footer a:hover {
  color: var(--green);
}
</style>