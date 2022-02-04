<template>
  <nav class="nav" aria-label="Primary Navigation">
    <ul class="nav__list">
      <li class="nav__list-item" v-for="item in navItems" :key="item">
        <a href="/" class="nav__list-link">{{ item }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      navItems: ['Men', 'Women', 'About', 'Contact']
    };
  }
};
</script>

<style lang="scss"></style>
