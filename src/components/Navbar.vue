<template>
  <ul id="nav">
    <b class="logo"> LOGO </b>
    <li v-for="link of links" :key="link">
      <router-link :to="link.href" :class="{ active: path == link.href }">
        {{ link.name }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => {
    return {
      links: [
        {
          name: "home",
          href: "/",
        },
        {
          name: "portfolio",
          href: "/portfolio",
        },
        {
          name: "resumè",
          href: "/resume",
        },
        {
          name: "contact",
          href: "/contact",
        },
      ],
    };
  },
  computed: {
    path() {
      return this.$route.path;
    },
  },
});
</script>

<style lang="scss" scoped>
#nav {
  width: 100%;
  height: 80px;
  margin: 0px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
  align-items: center;

  background: rgb(36, 36, 36);
  color: rgb(199, 199, 199);
  font-optical-sizing: auto;
  font-size: 22px;

  .logo {
    padding: 0px 30px 0px 10px;
  }

  li {
    list-style-type: none;
    padding: 0px 20px;

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        color: whitesmoke;
        text-decoration: underline;
      }

      &.active {
        color: whitesmoke;
        font-weight: bold;
      }
    }
  }
}
</style>
