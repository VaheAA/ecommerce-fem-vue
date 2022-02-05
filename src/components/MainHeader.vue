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
        <HeaderActions @toggleCart="toggleCart" />
      </div>
      <Cart
        @deleteItem="deleteItem"
        v-show="openedCart"
        :isEmpty="isEmpty"
        :products="products"
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
  data() {
    return {
      isMobile: this.detectedWith,
      isOpen: false,
      openedCart: false,
      isEmpty: true,
      products: [
        // {
        //   id: '1',
        //   name: 'Fall Limited Edition Sneakers',
        //   price: 125.0,
        //   count: 2
        // }
      ]
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
    },
    toggleCart() {
      this.openedCart = !this.openedCart;
    },
    deleteItem(id) {
      this.products = this.products.filter((product) => (product.id = id));
      if (!this.products.length) {
        this.isEmpty = true;
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
