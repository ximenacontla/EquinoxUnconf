<template>
  <header class="header sticky top-0 bg-white">
    <div class="h-2 w-full bg-primary-500"></div>
    <nav class="flex items-center justify-between flex-wrap py-6 container">
      <!-- site title / logo -->
      <div class="flex items-center flex-no-shrink mr-6 h-10">
        <g-link class="nav-link" to="/" :title="$static.metadata.siteName">
          Equinox 22/09/2020
          <!-- <g-image src="../../static/logo.svg" width="50" height="50" alt="logo" fit="outside" /> -->
        </g-link>
      </div>
      <!-- end site title / logo -->

      <!-- mobile navigation toggle -->
      <div class="block sm:hidden">
        <button @click="toggle" class="nav-toggle">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <!-- end navigation toggle -->

      <!-- Navigation Links-->
      <div
        :class="open ? 'block': 'hidden'"
        class="w-full sm:flex sm:items-center sm:w-auto flex-grow sm:flex-grow-0"
      >
        <a
          v-if="$route.path === '/'"
          href="#unconference"
          v-scroll-to="'#unconference'"
          class="nav-link"
        >Unconference</a>
        <g-link v-else to="/#unconferece" class="nav-link">Unconference</g-link>

        <g-link to="/teach" class="nav-link">Teach</g-link>
        <a v-if="$route.path === '/'" href="#learn" v-scroll-to="'#learn'" class="nav-link">Learn</a>
        <g-link v-else to="/#learn" class="nav-link">Learn</g-link>
        <a v-if="$route.path === '/'" href="#share" v-scroll-to="'#share'" class="nav-link">Share</a>
        <g-link v-else to="/#share" class="nav-link">Share</g-link>
      </div>
      <!-- End navigation Links-->
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  .nav-toggle {
    @apply flex items-center px-3 py-2 text-primary-500;
    &:hover {
      @apply text-primary-400;
    }
  }
  .nav-link {
    display: block;
    @apply text-primary-900 uppercase py-3 text-right font-bold;
    @screen sm {
      @apply flex px-3 py-0 whitespace-no-wrap text-left;
    }
    &:hover,
    &:focus,
    &.active--exact {
      @apply text-accent-500;
    }
  }
}
</style>