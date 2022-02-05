<template>
  <div class="container header__container">
    <header class="header">
      <div class="header__inner">
        <div class="brand">
          <a href="/">
            <img class="logo" src="../assets/images/logo.svg" alt="SNEAKERS" />
          </a>
        </div>
        <MainNav />
        <HeaderActions />
      </div>
    </header>
  </div>
</template>

<script>
import MainNav from './MainNav.vue';
import HeaderActions from './HeaderActions.vue';
export default {components: {MainNav, HeaderActions}};
</script>

<style lang="scss">
.header {
  position: relative;
  padding-bottom: 25px;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: $lightGrayishBlue;
    bottom: 0;
    left: 0;
  }

  &__inner {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
