<template>
  <MainHeader />
</template>

<script>
import MainHeader from './components/MainHeader.vue';
export default {
  name: 'App',
  components: {MainHeader}
};
</script>

<style lang="scss">
.container {
  max-width: 1140px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>
