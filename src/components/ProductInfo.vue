<template>
  <div class="product">
    <span class="product__brand">Sneaker Company</span>
    <div class="product__content">
      <h2 class="product__name">{{ title }}</h2>
      <p class="product__description">
        {{ description }}
      </p>
    </div>
    <div class="product__prices">
      <div class="product__prices-top">
        <span class="product__price-new">${{ newPrice }}</span>
        <span class="product__discount">{{ discount }}%</span>
      </div>
      <span class="product__price-old">${{ oldPrice }}</span>
    </div>
    <ProductActions
      :count="count"
      @increaseCount="increaseCount"
      @decreaseCount="decreaseCount"
      @addToCart="addToCart"
    />
  </div>
</template>

<script>
import ProductActions from './ProductActions.vue';
export default {
  name: 'ProductInfo',
  props: {
    title: String,
    description: String,
    newPrice: Number,
    discount: Number,
    oldPrice: Number,
    count: Number
  },
  components: {ProductActions},
  methods: {
    increaseCount() {
      this.$emit('increaseCount');
    },
    decreaseCount() {
      this.$emit('decreaseCount');
    },
    addToCart() {
      this.$emit('addToCart');
    }
  }
};
</script>

<style lang="scss">
.product {
  &__brand {
    color: $orange;
    font-weight: bold;
    display: inline-block;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 2px;
    padding-bottom: 35px;
    @include breakpoint(small) {
      font-size: 16px;
      padding-bottom: 20px;
    }
  }
  &__name {
    font-size: 42px;
    line-height: 48px;
    padding-bottom: 50px;
    @include breakpoint(small) {
      font-size: 32px;
      line-height: 38px;
      padding-bottom: 30px;
    }
  }
  &__description {
    color: $darkGrayishBlue;
    padding-bottom: 45px;
    @include breakpoint(small) {
      padding-bottom: 25px;
    }
  }
  &__prices {
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
    @include breakpoint(small) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
    }
  }
  &__prices-top {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__price-new {
    font-size: 28px;
    font-weight: bold;
  }
  &__discount {
    background: rgba($color: $orange, $alpha: 0.3);
    padding: 3px 8px;
    color: $orange;
    font-weight: bold;
    border-radius: 5px;
    font-size: 12px;
  }
  &__price-old {
    font-size: 16px;
    font-weight: bold;
    color: $darkGrayishBlue;
    text-decoration: line-through;
  }
}
</style>
