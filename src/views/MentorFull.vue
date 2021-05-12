<template>
  <div class="mentor-full">
    <div class="mentor-card">
      <img
        class="mentor-photo"
        :src="mentor.photo"
        :alt="'Photo of' + ' ' + mentor.name"
      />
      <div class="namecard">
        <h2>{{ mentor.name }}</h2>
        <h4>timezone</h4>
      </div>
      <div>
        <StripeCheckout
          ref="checkoutRef"
          mode="payment"
          :pk="publishableKey"
          :line-items="lineItems"
          :success-url="successURL"
          :cancel-url="cancelURL"
          @loading="(v) => (loading = v)"
        />
      </div>
      <div class="bio">
        <p>{{ mentor.bio }}</p>
      </div>
      <button @click="submit">Book Me!</button>
    </div>
  </div>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";

export default {
  components: {
    StripeCheckout,
  },
  name: "MentorFull",

  computed: {
    mentor() {
      return this.$store.state.selectedMentor;
    },
  },

  data() {
    return {
      //holy crap this is dangerous, but.. yolo. (P.S.: Don't snitch to Daniel)
      publishableKey:
        "pk_test_51IpoP5JE2aA1nBuaRklotsBycJQNFHDIR0x4Bl7yiegoKcck5v8gbqiFdbQBVFJtIHrMLfvyRlSy5Y8QfP36aREr00l1vEZETL",
      loading: false,
      lineItems: [
        {
          price: this.$store.state.selectedMentor.priceID, // HOW DO WE BRING OVER THE MENTOR PRICE ID 
          quantity: 1,
        },
      ],
      // Change back when pushing
      successURL: "https://mentorme-staging.herokuapp.com/success", //Needs to land on success page
      cancelURL: "https://mentorme-staging.herokuapp.com/", //Needs to land back on mentor full with a message that states payment cancelled.. or something.. idk
    };
  },
  methods: {
    submit() {
      // redirects to STRIPE checkout
      console.log("BUTTON PUSHED");
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>

<style scoped>
.mentor-full {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.mentor-card {
  border: 1px solid black;
}

.mentor-photo {
  height: 30vh;
}
</style>
