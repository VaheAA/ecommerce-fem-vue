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

<style lang="scss">
.nav {
  &__list {
    display: flex;
    align-items: center;
  }
  &__list-item {
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
  &__list-link {
    color: $darkGrayishBlue;
    position: relative;
    transition: all 0.2s ease;
    padding-bottom: 38px;

    &:hover {
      color: $veryDarkBlue;
    }

    &:hover::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      background: $orange;
      bottom: 0;
      left: 0;
      transition: all 0.2s ease;
    }
  }
}
</style>
