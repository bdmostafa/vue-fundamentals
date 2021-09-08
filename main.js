Vue.component("coupon", {

  template: '<input placeholder="Enter the coupon code" @blur="onCouponApplied">',

  methods: {
    onCouponApplied() {
      this.$emit('applied');
    },
  },
});

new Vue({
  el: "#app-root",

  data: {
      couponApplied: false,
  },

  methods: {
    onCouponApplied() {
      alert("applied successfully........");
      this.couponApplied = true;
    },
  },
});
