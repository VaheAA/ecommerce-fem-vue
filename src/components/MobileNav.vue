<template>
  <div class="mobile__nav">
    <button class="burger__btn">
      <img src="../assets/images/icons/icon-menu.svg" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'MobileNavigation'
};
</script>

<style lang="scss">
.mobile__nav {
  .burger__btn {
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
