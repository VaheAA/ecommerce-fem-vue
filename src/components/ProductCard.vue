<template>
  <main>
    <div class="product-card" :class="{container: !isMobile}">
      <DesktopLightbox v-if="!isMobile" />
      <MobileLightbox v-else />
      <div class="container">
        <ProductInfo
          :title="title"
          :description="description"
          :newPrice="newPrice"
          :oldPrice="oldPrice"
          :discount="discount"
          :count="count"
          @increaseCount="increaseCount"
          @decreaseCount="decreaseCount"
          @addToCart="addToCart"
        />
      </div>
    </div>
  </main>
</template>

<script>
import DesktopLightbox from './DesktopLightbox.vue';
import MobileLightbox from './MobileLightbox.vue';
import ProductInfo from './ProductInfo.vue';
export default {
  components: {MobileLightbox, DesktopLightbox, ProductInfo},
  props: {
    title: String,
    description: String,
    newPrice: Number,
    discount: Number,
    oldPrice: Number,
    count: Number
  },
  data() {
    return {
      isMobile: this.detectWidth
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
    increaseCount() {
      this.$emit('increaseCount');
    },
    decreaseCount() {
      this.$emit('decreaseCount');
    },
    addToCart() {
      this.$emit('addToCart');
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
.product-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 120px;
  @include breakpoint(small) {
    flex-direction: column;
    gap: 40px;
  }
}
</style>
