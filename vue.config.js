module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/style.scss"; @import "@/assets/scss/colors.scss";`
      }
    }
  }
};
