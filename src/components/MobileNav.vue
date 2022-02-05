<template>
  <div class="mobile" :class="{open: isOpen}" :isOpen="isOpen">
    <nav class="mobile__nav" aria-label="Mobile Navigation">
      <ul class="mobile__list">
        <li class="mobile__list-item" v-for="item in navItems" :key="item">
          <a href="#" class="mobile__list-link">{{ item }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MobileNavigation',
  props: {
    isOpen: Boolean
  },
  data() {
    return {
      navItems: ['Men', 'Women', 'About', 'Contact']
    };
  }
};
</script>

<style lang="scss">
.mobile {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: rgba($color: #000000, $alpha: 0.75);
  transform: translateX(-100%);
  transition: all 0.3s linear;
  &.open {
    transform: translateX(0);
    transition: all 0.3s linear;
  }
  &__nav {
    background: $white;
    width: 65%;
    height: 100%;
    padding: 20px;
  }
  &__list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 50px;
  }
  &__list-item {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  &__list-link {
    color: $veryDarkBlue;
    font-weight: bold;
  }
}
</style>
