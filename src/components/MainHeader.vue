<template>
  <div class="container">
    <header class="header">
      <div class="header__inner">
        <div class="brand">
          <a href="/">
            <img class="logo" src="../assets/images/logo.svg" alt="SNEAKERS" />
          </a>
        </div>
        <MainNav />
      </div>
    </header>
  </div>
</template>

<script>
import MainNav from './MainNav.vue';
export default {components: {MainNav}};
</script>

<style lang="scss"></style>
