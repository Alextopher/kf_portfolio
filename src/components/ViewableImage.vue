<template>
  <div>
    <img class="preview" :src="preview" />
    <img :src="full" style="display: none" loading="lazy" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    preview: String,
    full: String,
  },
});
</script>

<style lang="scss" scoped>
div {
  display: inline-flex;
  padding: 10px;
}

.preview {
  cursor: pointer;
}
</style>
