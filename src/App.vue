<template>
  <div>
    <image-modal class="modal" @close="modal=''" v-if="modal" :image="modal" />
    <navbar />
    <div class="content">
      <viewable-image @click="show(require('@/assets/monkey.jpg'))"
        :preview="require('@/assets/monkey.jpg?width=200')" 
        :full="require('@/assets/monkey.jpg')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import ImageModal from "./components/ImageModal.vue";
import ViewableImage from "./components/ViewableImage.vue";

export default defineComponent({
  components: {
    Navbar,
    ImageModal,
    ViewableImage,
  },
  data: () => {
    return {
      modal: "",
    };
  },
  methods: {
    show(img: string) {
      this.modal = img;
    },
  },
});
</script>

<style lang="scss">
html body {
  overflow-x: hidden;
  margin: 0;
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

<style lang="scss" scoped>
.content {
  margin-top: 80px;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}
</style>
