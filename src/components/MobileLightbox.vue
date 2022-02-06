<template>
  <div class="lightbox__slider">
    <div class="lightbox__slider-wrapper">
      <div class="lightbox__slider-slide">
        <span v-for="image in imagesData" :key="image.id">
          <img :src="image.fullImage" v-show="image.id === currentSlide" />
        </span>
      </div>
      <div class="lightbox__slider-controls">
        <button
          class="lightbox__slider-btn lightbox__slider-btn--prev"
          @click="previousImage"
        >
          <img src="../assets/images/icons/icon-previous.svg" />
        </button>
        <button
          class="lightbox__slider-btn lightbox__slider-btn--next"
          @click="nextImage"
        >
          <img src="../assets/images/icons/icon-next.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileLightbox',
  data() {
    return {
      imagesData: [
        {
          id: 1,
          fullImage: require('../assets/images/products/image-product-1.jpg'),
          thumbnail: require('../assets/images/products/image-product-1-thumbnail.jpg')
        },
        {
          id: 2,
          fullImage: require('../assets/images/products/image-product-2.jpg'),
          thumbnail: require('../assets/images/products/image-product-2-thumbnail.jpg')
        },
        {
          id: 3,
          fullImage: require('../assets/images/products/image-product-3.jpg'),
          thumbnail: require('../assets/images/products/image-product-3-thumbnail.jpg')
        },
        {
          id: 4,
          fullImage: require('../assets/images/products/image-product-4.jpg'),
          thumbnail: require('../assets/images/products/image-product-4-thumbnail.jpg')
        }
      ],
      currentSlide: 1
    };
  },
  methods: {
    nextImage() {
      this.currentSlide += 1;
      if (this.currentSlide > this.imagesData.length) {
        this.currentSlide = 1;
      }
    },
    previousImage() {
      this.currentSlide -= 1;
      if (this.currentSlide < 1) {
        this.currentSlide = this.imagesData.length;
      }
    }
  }
};
</script>

<style lang="scss">
.lightbox__slider {
  position: relative;
  &_-wrapper {
    position: relative;
  }
  &-slide {
    width: 100%;
    max-height: 300px;
    overflow: hidden;
  }
  &-controls {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &-btn {
    background: $white;
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  }
  &-btn--prev {
    left: 10px;
  }
  &-btn--next {
    right: 10px;
  }
}
</style>
