<template>
  <iframe
    :width="width"
    :height="height ? height : (9 / 16) * width"
    :src="src"
    title="YouTube video player"
    frameborder="0"
    allowfullscreen
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    width: Number,
    height: Number,
    src: String,
  },
});
</script>
