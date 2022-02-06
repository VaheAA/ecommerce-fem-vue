<template>
  <MainHeader
    :cartProducts="cartProducts"
    :isEmpty="isEmpty"
    :openedCart="openedCart"
    @toggleCart="toggleCart"
    @deleteItem="deleteItem"
    :cartCount="cartProducts.length"
  />
  <ProductCard
    :newPrice="product.newPrice"
    :count="count"
    @increaseCount="increaseCount"
    @decreaseCount="decreaseCount"
    @addToCart="addToCart(product.id)"
    :title="product.title"
    :description="product.description"
    :oldPrice="product.oldPrice"
    :discount="product.discount"
  />
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import ProductCard from './components/ProductCard.vue';
export default {
  name: 'App',
  components: {MainHeader, ProductCard},
  data() {
    return {
      cartProducts: [],
      product: {
        id: '1',
        title: 'Fall limited Edition Sneakers ',
        description:
          'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything theweather can offer.',
        newPrice: 125,
        discount: 50,
        oldPrice: 250.0
      },
      isEmpty: true,
      count: 0,
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
    },
    increaseCount() {
      this.count += 1;
    },
    decreaseCount() {
      this.count -= 1;
      if (this.count < 1) {
        this.count = 0;
      }
    },
    addToCart(id) {
      const cartProduct = {
        id: this.product.id,
        title: this.product.title,
        newPrice: this.product.newPrice,
        count: this.count < 1 ? 1 : this.count
      };
      if (this.cartProducts.length) {
        this.cartProducts.forEach((product) => {
          if (id === product.id && this.count === 0) {
            product.count += this.count + 1;
          } else {
            product.count += this.count;
          }
        });
      } else {
        this.cartProducts.push(cartProduct);
        this.isEmpty = false;
      }
    }
  },
  created() {
    if (this.cartProducts.length) {
      this.isEmpty = false;
    }
    this.count = 0;
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
