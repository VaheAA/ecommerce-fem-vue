<template>
  <div class="burger" v-if="isMobile" :isMobile="isMobile">
    <button class="burger__btn">
      <img :src="!isOpen ? openIcon : closeIcon" :isOpen="isOpen" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'BurgerButton',
  props: {
    isMobile: Boolean,
    isOpen: Boolean
  },
  data() {
    return {
      openIcon: require('../assets/images/icons/icon-menu.svg'),
      closeIcon: require('../assets/images/icons/icon-close.svg')
    };
  }
};
</script>

<style lang="scss">
.burger {
  margin-right: 15px;
  z-index: 16;
  &__btn {
    background: transparent;
    border: none;
    cursor: pointer;
    img {
      display: block;
      object-fit: cover;
    }
  }
}
</style>
