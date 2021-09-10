<template>
  <div id="app">
    
    <!-- <input type="text" v-model="coupon" /> -->

    <!-- Its the same thing as v-model -->
    <!-- <input type="text" :value="coupon" @input="coupon = $event.target.value" /> -->

<coupon v-model="coupon"></coupon>

  </div>
</template>

<script>
import Coupon from "./components/Coupon.vue";

export default {
  name: "app",

  data() {
    return {
      coupon: 'FREEBIE',
    }
    
  },

  components: { Coupon }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
