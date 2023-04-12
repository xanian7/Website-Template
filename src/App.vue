<script setup>
import LeftNav from './components/LeftNav.vue';
import Home from './components/Home.vue';
//import TheWelcome from './components/TheWelcome.vue';
//import HelloWorld from './components/HelloWorld.vue';
import TopBar from './components/TopBar.vue';
</script>

<template>
  <LeftNav />
  <TopBar />
 
    <!--<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="I'm losing my sanity!" />
    </div>
  -->
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
  margin: 0 auto 
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
