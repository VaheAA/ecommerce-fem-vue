<template>
  <div class="cart__wrapper" :isEmpty="isEmpty" :cartProducts="cartProducts">
    <div class="cart__heading">
      <span class="cart__title">Cart</span>
    </div>
    <div class="cart__info">
      <p class="empty" v-if="isEmpty">Your cart is empty</p>
      <div v-else class="products">
        <div
          class="product"
          v-for="product in cartProducts"
          :key="product.title"
        >
          <img
            src="../assets/images/products/image-product-4-thumbnail.jpg"
            class="product__img"
            alt="product preview"
          />
          <div class="product__info">
            <span class="product__info-item product__title">{{
              product.title
            }}</span>
            <p class="product__info-item product__price">
              ${{ product.newPrice }} <span>x {{ product.count }}</span>
              <strong>${{ product.newPrice * product.count }}</strong>
            </p>
          </div>
          <button class="product__btn-delete" @click="deleteItem(product.id)">
            <img
              src="../assets/images/icons/icon-delete.svg"
              alt="delete product icon"
            />
          </button>
        </div>
        <button class="product__btn-checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCart',
  props: {
    isEmpty: Boolean,
    image: String,
    cartProducts: Array,
    totalPrice: Number
  },
  methods: {
    deleteItem() {
      this.$emit('deleteItem');
    }
  }
};
</script>

<style lang="scss">
.cart__wrapper {
  max-width: 360px;
  width: 100%;
  min-height: 260px;
  height: 260px;
  border-radius: 10px;
  box-shadow: 0px 12px 12px 1px rgba($color: #000000, $alpha: 0.5);
  background: $white;
  position: absolute;
  top: 60px;
  right: 0;
  z-index: 10;

  .cart__heading {
    position: relative;
    padding-bottom: 25px;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background: $lightGrayishBlue;
      bottom: 0;
      left: 0;
    }
  }
  .cart__title {
    color: $veryDarkBlue;
    padding: 25px 25px 0 25px;
    font-weight: bold;
    font-size: 16px;
    display: inline-block;
  }

  .cart__info {
    .empty {
      color: $darkGrayishBlue;
      font-weight: 500;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 75px;
    }
    .products {
      padding: 25px;
      display: flex;
      flex-direction: column;
      @include breakpoint(small) {
        padding: 10px;
      }
      .product {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 35px;
        @include breakpoint(small) {
          justify-content: flex-start;
          gap: 15px;
        }

        &__img {
          max-width: 55px;
          object-fit: cover;
          border-radius: 5px;
        }
        &__info {
          display: flex;
          flex-direction: column;
        }
        &__info-item {
          width: 100%;
          display: inline-block;
          font-size: 16px;
        }
        &__title {
          color: $darkGrayishBlue;
        }
        &__price {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 15px;
          color: $darkGrayishBlue;

          strong {
            color: $veryDarkBlue;
          }
        }
        &__btn-delete {
          background: none;
          border: none;
          cursor: pointer;
        }
        &__btn-checkout {
          background: $orange;
          border: none;
          cursor: pointer;
          padding: 15px 0;
          border-radius: 10px;
          color: $white;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
