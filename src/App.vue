<template>
  <navbar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/navigation/Navbar.vue";

export default defineComponent({
  components: {
    Navbar,
  },
});
</script>

<style lang="scss">
html body {
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
</style>
