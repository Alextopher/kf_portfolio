<template>
  <div>Home</div>
  <youtub-embeded
    :width="900"
    src="https://www.youtube.com/embed/sVInBOLSqoM"
  />
</template>

<script lang="ts">
import YoutubEmbeded from "@/components/YoutubEmbeded.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { YoutubEmbeded },
});
</script>
