// For event dispatch
// window.Event = new Vue();

// To remove dollar sign $ on $emit and $on
window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data)
    }

    listen (event, callback) {
        this.vue.$on(event, callback)
    }
}

Vue.component("coupon", {
  template:
    '<input placeholder="Enter the coupon code" @blur="onCouponApplied">',

  methods: {
    onCouponApplied() {
    //   Event.$emit("applied");
    Event.fire('applied');
    },
  },
});

new Vue({
  el: "#app-root",

  data: {
    couponApplied: false,
  },

  created() {
    // Event.$on("applied", () => alert("applied successfully........"));
    Event.listen('applied', () => alert("applied successfully........"));
  },
});
