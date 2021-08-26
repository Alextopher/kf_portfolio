<template>
  <div>Portolio</div>
  <image-gallery>
    <viewable-image
      @click="$emit('show', require('@/assets/monkey.jpg'))"
      :preview="require('@/assets/monkey.jpg?height=300')"
      :full="require('@/assets/monkey.jpg')"
    />
    <viewable-image
      @click="$emit('show', require('@/assets/3.png'))"
      :preview="require('@/assets/3.png?height=300')"
      :full="require('@/assets/3.png')"
    />
    <viewable-image
      @click="$emit('show', require('@/assets/5.png'))"
      :preview="require('@/assets/5.png?height=300')"
      :full="require('@/assets/5.png')"
    />
    <viewable-image
      @click="$emit('show', require('@/assets/3.png'))"
      :preview="require('@/assets/3.png?height=300')"
      :full="require('@/assets/3.png')"
    />
    <viewable-image
      @click="$emit('show', require('@/assets/5.png'))"
      :preview="require('@/assets/5.png?height=300')"
      :full="require('@/assets/5.png')"
    />
  </image-gallery>
</template>

<script lang="ts">
import ImageGallery from "@/components/ImageGallery.vue";
import ViewableImage from "@/components/ViewableImage.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ViewableImage,
    ImageGallery,
  },
});
</script>
