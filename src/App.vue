<script setup>
import LeftNav from './components/LeftNav.vue';
</script>

<template id="app">
  <div>
    <div>
      <LeftNav>Hello</LeftNav>
    </div>
    <div>
      <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      </header></div>
    </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.wrapper {
  size: 100%
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
