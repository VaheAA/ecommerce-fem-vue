<template>
  <div class="product__cta">
    <div class="product__count">
      <button
        aria-label="decrease product count"
        class="product__cta-btn"
        @click="decreaseCount"
      >
        <img src="../assets/images/icons/icon-minus.svg" alt="decrease icon" />
      </button>
      <span>{{ count }}</span>
      <button
        aria-label="increase product count"
        class="product__cta-btn"
        @click="increaseCount"
      >
        <img src="../assets/images/icons/icon-plus.svg" alt="increase icon" />
      </button>
    </div>
    <button aria-label="add to cart" class="product__add" @click="addToCart">
      <img
        src="../assets/images/icons/icon-cart-white.svg"
        alt="add to cart icon"
      />
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProductActions',
  props: {
    count: Number
  },
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
.product__cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @include breakpoint(small) {
    flex-direction: column;
  }
}
.product__count {
  flex: 1;
  padding: 22px;
  height: 100%;
  background: $lightGrayishBlue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  @include breakpoint(small) {
    width: 100%;
    padding: 12px;
  }
}
.product__cta-btn {
  background: none;
  border: none;
  cursor: pointer;
}
.product__add {
  flex: 2;
  background: $orange;
  border: none;
  display: flex;
  align-items: center;
  padding: 15px;
  justify-content: center;
  border-radius: 10px;
  gap: 15px;
  color: $white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.7;
  }
  @include breakpoint(small) {
    width: 100%;
    padding: 12px;
  }
}
</style>
