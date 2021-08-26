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
    preview: { type: String, required: true },
    full: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
div {
  padding: 10px;
}

.preview {
  cursor: pointer;
}
</style>
