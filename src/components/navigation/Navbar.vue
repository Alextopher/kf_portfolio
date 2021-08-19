<template>
  <ul id="nav">
    <li v-for="link of links" :key="link">
      <span> {{ link }} </span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => {
    return {
      links: ["Hello", "World", "Photos"],
    };
  },
});
</script>

<style lang="scss" scoped>
#nav {
  width: 100%;
  height: 80px;
  margin: 0px;
  position: absolute;
  top: 0px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  background: rgb(36, 36, 36);
  color: white;
  font-optical-sizing: auto;
  font-size: 22px;

  li {
    list-style-type: none;
  }
}
</style>
