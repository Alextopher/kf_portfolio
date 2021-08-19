<template>
  <div class="modal" @click="$emit('close')">
    <div>
      <a :href="image" target="_blank" ref="noopener noreferrer">
        <img :src="image" :alt="image" @click="kill" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    image: String,
  },
  methods: {
    kill(e: MouseEvent) {
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    },
  },
});
</script>

<style lang="scss" scoped>
.modal {
  width: 100vw;
  height: 100vw;
  background: gray;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    a {
      display: inline-flex;
      height: 90%;
      cursor: pointer;
      justify-content: center;

      img {
        height: 100%;
      }
    }
  }
}
</style>
