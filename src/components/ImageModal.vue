<template>
  <div class="modal" @click="$emit('close')">
    <img :src="image" :alt="image" @click="kill" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    image: String,
  },
  methods: {
    kill (e: MouseEvent) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    }
  }
});
</script>

<style lang="scss" scoped>
.modal {
  width: 100vw;
  height: 100vw;
  background: gray;

  img {
    display: block;
    margin: auto;
    margin-top: 5%;
    height: 80%;
  }
}
</style>
