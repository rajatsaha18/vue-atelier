<template>
  <MyHeader/>
  <router-view :key="$route.path"/>
  <MyFooter/>
</template>

<script>
import MyHeader from './components/includes/MyHeader.vue';
import MyFooter from './components/includes/MyFooter.vue';
export default {
  name: "App",
  components: {MyHeader, MyFooter},
}
</script>

<style scoped>

</style>
