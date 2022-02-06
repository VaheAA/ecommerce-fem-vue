<template>
  <div class="container header__container">
    <header class="header">
      <div class="header__inner">
        <BurgerBtn
          :isOpen="isOpen"
          :isMobile="isMobile"
          @click="toggleMobileMenu"
        />
        <div class="brand">
          <a class="brand__link" href="/">
            <img class="logo" src="../assets/images/logo.svg" alt="SNEAKERS" />
          </a>
        </div>
        <MainNav :isMobile="isMobile" />
        <HeaderActions @toggleCart="toggleCart" :cartCount="cartCount" />
      </div>
      <Cart
        @deleteItem="deleteItem"
        v-show="openedCart"
        :isEmpty="isEmpty"
        :cartProducts="cartProducts"
      />
    </header>
  </div>
  <MobileNav :isOpen="isOpen" />
</template>

<script>
import MainNav from './MainNav.vue';
import HeaderActions from './HeaderActions.vue';
import BurgerBtn from './BurgerBtn.vue';
import MobileNav from './MobileNav.vue';
import Cart from './Cart.vue';

export default {
  components: {MainNav, HeaderActions, BurgerBtn, MobileNav, Cart},
  props: {
    cartProducts: Array,
    isEmpty: Boolean,
    openedCart: Boolean,
    cartCount: Number
  },
  emits: ['toggleCart', 'deleteItem'],
  data() {
    return {
      isMobile: this.detectWidth,
      isOpen: false
    };
  },
  methods: {
    detectWidth() {
      if (window.innerWidth > 727) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    },
    toggleMobileMenu() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'scroll';
      }
    },
    toggleCart() {
      this.openedCart = !this.openedCart;
    },
    toggleCart() {
      this.$emit('toggleCart');
    },
    deleteItem() {
      this.$emit('deleteItem');
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
  @include breakpoint(small) {
    padding-bottom: 0;
  }
  .brand {
    margin-right: 50px;
    @include breakpoint(small) {
      margin-right: 0;
    }
    &__link {
      display: inline-block;
    }
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: $lightGrayishBlue;
    bottom: 0;
    left: 0;
    z-index: -1;

    @include breakpoint(small) {
      display: none;
    }
  }

  &__inner {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
