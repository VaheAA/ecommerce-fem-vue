<template>
  <div :class="{container: !isMobile}">
    <div class="product-card">
      <DesktopLightbox v-if="!isMobile" />
      <MobileLightbox v-else />
    </div>
  </div>
</template>

<script>
import DesktopLightbox from './DesktopLightbox.vue';
import MobileLightbox from './MobileLightbox.vue';
export default {
  components: {MobileLightbox, DesktopLightbox},
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

<style lang="scss"></style>
