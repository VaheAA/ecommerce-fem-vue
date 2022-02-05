<template>
  <div class="actions">
    <div class="cart">
      <button class="cart__btn" @click="toggleCart">
        <img src="../assets/images/icons/icon-cart.svg" />
      </button>
    </div>
    <div class="profile">
      <button class="profile__btn">
        <img
          class="profile__avatar"
          src="../assets/images/image-avatar.png"
          alt=""
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderActions',
  methods: {
    toggleCart() {
      this.$emit('toggleCart');
    }
  }
};
</script>

<style lang="scss">
.actions {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  .cart {
    margin-right: 40px;
    @include breakpoint(small) {
      margin-right: 10px;
    }
    &__btn {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
  .profile {
    max-width: 50px;
    border-radius: 50%;
    @include breakpoint(small) {
      max-width: 22px;
    }

    &__btn {
      background: transparent;
      border: none;
      cursor: pointer;
      width: 100%;
      border-radius: 50%;
    }

    &__avatar {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 50%;
      &:hover {
        border: 2px solid $orange;
      }
    }
  }
}
</style>
