<template>
  <div ref="site">
    <navbar />
    <div class="content">
      <router-view />
    </div>

    <image-modal class="modal" @close="close()" v-if="modal" :image="modal" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import ImageModal from "./components/ImageModal.vue";

export default defineComponent({
  components: {
    Navbar,
    ImageModal,
  },
  data: () => {
    return {
      modal: "",
    };
  },
  methods: {
    show(img: string) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      let body = (this.$refs["site"] as HTMLElement).parentElement!;
      body.style.overflow = "hidden auto";
      this.modal = img;
    },
    close() {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      let body = (this.$refs["site"] as HTMLElement).parentElement!;
      body.style.overflow = "hiden";
      this.modal = "";
    },
  },
});
</script>

<style lang="scss">
body {
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
  margin: 18px;
}

.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
