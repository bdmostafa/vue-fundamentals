<template>
  <div id="app">
    <message> Hello Vue 2! </message>

    <message> Hello Vue 3! </message>
  </div>
</template>

<script>
import Message from "./components/Message.vue";

export default {
  name: "app",

  data() {},

  components: { Message }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
