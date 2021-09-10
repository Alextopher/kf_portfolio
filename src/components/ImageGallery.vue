<template>
  <div class="container" ref="slot">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    auto: { type: Boolean, default: false },
  },
  data: () => {
    return {
      position: 0,
    };
  },
  methods: {
    left() {
      console.log(this.$refs["slot"]);
    },
  },
  mounted() {
    let slot = this.$refs["slot"] as HTMLElement;
    console.log(slot.children.length);
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
