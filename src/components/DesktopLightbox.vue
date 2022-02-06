<template>
  <div class="lightbox">
    <div class="lightbox__image" v-for="image in imagesData" :key="image.id">
      <span v-show="image.id === selectedImage" @click="openModal(image.id)">
        <img class="lightbox__image--main" :src="image.fullImage" />
      </span>
    </div>
    <div class="lightbox__thumbnails">
      <span
        v-for="image in imagesData"
        :key="image.id"
        @click="changeImage(image.id)"
      >
        <img class="lightbox__thumbnails-image" :src="image.thumbnail" />
      </span>
    </div>
  </div>
  <div class="lightbox__modal" v-if="isOpen" @click.self="closeModal">
    <div class="lightbox__modal-wrapper">
      <span v-for="image in imagesData" :key="image.id">
        <img
          class="lightbox__modal-image"
          :src="image.fullImage"
          v-show="image.id === selectedModalImage"
        />
      </span>
      <div class="lightbox__modal-thumbnails">
        <span
          v-for="image in imagesData"
          :key="image.id"
          @click="changeModalImage(image.id)"
          :class="[selectedModalImage === image.id ? 'active' : '']"
        >
          <img class="lightbox__modal-thumbnail-image" :src="image.thumbnail" />
        </span>
      </div>
      <div class="lightbox__modal-controls">
        <button
          class="lightbox__modal-btn lightbox__modal-btn--prev"
          @click="previousImage"
        >
          <img src="../assets/images/icons/icon-previous.svg" />
        </button>
        <button
          class="lightbox__modal-btn lightbox__modal-btn--next"
          @click="nextImage"
        >
          <img src="../assets/images/icons/icon-next.svg" />
        </button>
      </div>
      <button class="lightbox__modal-close" @click="closeModal">
        <img src="../assets/images/icons/icon-close-white.svg" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductLightbox',
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
      selectedImage: 1,
      selectedModalImage: null,
      isOpen: false
    };
  },
  methods: {
    changeImage(id) {
      this.selectedImage = id;
    },
    changeModalImage(id) {
      this.selectedModalImage = id;
    },
    nextImage() {
      this.selectedModalImage += 1;
      if (this.selectedModalImage > this.imagesData.length) {
        this.selectedModalImage = 1;
      }
    },
    previousImage() {
      this.selectedModalImage -= 1;
      if (this.selectedModalImage < 1) {
        this.selectedModalImage = this.imagesData.length;
      }
    },
    openModal(id) {
      this.selectedModalImage = id;
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
      this.selectedModalImage = null;
    }
  }
};
</script>

<style lang="scss">
.lightbox {
  max-width: 450px;
  max-height: 600px;

  &__image {
    max-width: 100%;
    cursor: pointer;
    border-radius: 10px;
  }

  &__image--main {
    object-fit: cover;
    border-radius: 10px;
    width: 100%;
  }
  &__thumbnails {
    margin-top: 15px;
    display: flex;
    gap: 20px;
    span {
      transition: all 0.2s ease;
      border-radius: 10px;
      &:hover {
        border: 2px solid $orange;
      }
    }
  }

  &__thumbnails-image {
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;

    &:hover {
      opacity: 0.5;
    }
  }
  &__modal {
    position: fixed;
    background: rgba($color: #000000, $alpha: 0.7);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &-wrapper {
      position: relative;
    }
    &-close {
      position: absolute;
      top: -30px;
      right: 0;
      cursor: pointer;
      background: transparent;
      border: none;
      max-width: 20px;
      width: 100%;

      img {
        width: 100%;
      }
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 450px;
      max-height: 450px;
      border-radius: 10px;
    }
    &-image {
      max-width: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
    &-controls {
      position: absolute;
      top: 40%;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    &-btn {
      background: $white;
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
    }
    &-btn--prev {
      left: -25px;
    }
    &-btn--next {
      right: -25px;
    }
  }
  &__modal-thumbnails {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 20px;
    span {
      transition: all 0.2s ease;
      border-radius: 10px;
      max-width: 85px;

      &.active {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba($color: #fff, $alpha: 0.6);
          border-radius: 10px;
          border: 2px solid $orange;
        }
      }
    }
  }

  &__modal-thumbnail-image {
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;

    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
