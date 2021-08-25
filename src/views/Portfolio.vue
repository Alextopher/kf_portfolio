<template>
  <div>Portolio</div>
  <viewable-image
    @click="$emit('show', require('@/assets/monkey.jpg'))"
    v-for="i in [1] * 10"
    :key="i"
    :preview="require('@/assets/monkey.jpg?width=200')"
    :full="require('@/assets/monkey.jpg')"
  />
</template>

<script lang="ts">
import ViewableImage from "@/components/ViewableImage.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ViewableImage,
  },
});
</script>
