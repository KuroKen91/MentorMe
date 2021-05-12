<template>
  <div class="mentor-full">
    <button @click="emitReturnToMainPage">Return to Mentors</button>
    <div class="mentor-card">
      <img
        :src="this.mentorData.photo"
        :alt="'Photo of' + ' ' + this.mentorData.name"
        class="mentor-photo"
      />
      <div class="namecard">
        <h2>{{ this.mentorData.name }}</h2>
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
        <p>{{ this.mentorData.tag }}</p>
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
  props: {
    mentorData: {
      name: String,
      photo: String,
      tag: String,
      bio: String,
      skillset: Array,
    },
  },
   data () {
    return {      //holy crap this is dangerous, but.. yolo. (P.S.: Don't snitch to Daniel)
      publishableKey: "pk_test_51IpoP5JE2aA1nBuaRklotsBycJQNFHDIR0x4Bl7yiegoKcck5v8gbqiFdbQBVFJtIHrMLfvyRlSy5Y8QfP36aREr00l1vEZETL",
      loading: false,
      priceKey: "",
      lineItems: [
        {
          price: "price_1Ipr2QJE2aA1nBuaYDN4WXlT", // The id of item
          quantity: 1,
        },
      ],
      successURL: "https://www.google.com", //Needs to land on success page
      cancelURL: "https://www.yahoo.com", //Needs to land back on mentor full with a message that states payment cancelled.. or something.. idk
    };
  },
  methods: {
    emitReturnToMainPage() {
      this.$emit("return-to-MainPage-please");
    },
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
