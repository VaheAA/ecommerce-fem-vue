<template>
  <MainHeader
    :cartProducts="cartProducts"
    :isEmpty="isEmpty"
    :openedCart="openedCart"
    @toggleCart="toggleCart"
    @deleteItem="deleteItem"
    :cartCount="cartProducts.length"
  />
  <ProductCard />
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import ProductCard from './components/ProductCard.vue';
export default {
  name: 'App',
  components: {MainHeader, ProductCard},
  data() {
    return {
      cartProducts: [
        {
          id: '1',
          name: 'Best Sneakers',
          price: 125.0,
          count: 1
        }
      ],
      isEmpty: true,
      openedCart: false
    };
  },
  methods: {
    toggleCart() {
      this.openedCart = !this.openedCart;
    },
    deleteItem(id) {
      this.cartProducts = this.cartProducts.filter(
        (product) => (product.id = id)
      );
      if (!this.cartProducts.length) {
        this.isEmpty = true;
      }
    }
  },
  created() {
    if (this.cartProducts.length) {
      this.isEmpty = false;
    }
  }
};
</script>

<style lang="scss">
.container {
  max-width: 1140px;
  padding: 0 20px;
  margin: 0 auto;
}
.header__container {
  padding: 45px 20px;

  @include breakpoint(small) {
    padding: 20px;
  }
}
</style>
