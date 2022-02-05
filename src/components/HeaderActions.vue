<template>
  <div class="actions">
    <div class="cart">
      <button class="cart__btn">
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
  name: 'HeaderActions'
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
    &__btn {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
  .profile {
    max-width: 50px;
    border-radius: 50%;

    &__btn {
      background: transparent;
      border: none;
      cursor: pointer;
      width: 100%;
    }

    &__avatar {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 50%;
      transition: all 0.2s ease;
      &:hover {
        border: 2px solid $orange;
      }
    }
  }
}
</style>
