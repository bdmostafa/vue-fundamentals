<template>
  <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input"/>
</template>


<script>

export default {

  props: ['code'],

  data() {
    return {
      invalidCodes: ['ALLFREE', 'FREE', 'NOTHING']
    }
  },

  methods: {
    updateCode(code) {
      // Validation
      if(this.invalidCodes.includes(code)) {
        alert(`This code "${code}" is no longer as well!`);

        this.$refs.input.value = code = '';

      }

      this.$emit('input', code);
    },
  },
    
};

</script>

<style>

</style>
