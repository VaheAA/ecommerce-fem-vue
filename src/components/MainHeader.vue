<template>
  <div class="container header__container">
    <header class="header">
      <div class="header__inner">
        <MobileNav />
        <div class="brand">
          <a href="/">
            <img class="logo" src="../assets/images/logo.svg" alt="SNEAKERS" />
          </a>
        </div>
        <MainNav :isMobile="isMobile" />
        <HeaderActions />
      </div>
    </header>
  </div>
</template>

<script>
import MainNav from './MainNav.vue';
import HeaderActions from './HeaderActions.vue';
import MobileNav from './MobileNav.vue';
export default {
  components: {MainNav, HeaderActions, MobileNav},
  data() {
    return {
      isMobile: this.detectedWith
    };
  },
  methods: {
    detectWidth() {
      if (window.innerWidth > 550) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    }
  },
  mounted() {
    this.detectWidth();
    window.addEventListener('resize', this.detectWidth);
  },
  beforeMount() {
    this.detectWidth();
    window.addEventListener('resize', this.detectWidth);
  }
};
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
