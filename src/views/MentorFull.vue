<template>
  <div class="mentor-full">
    <div class="mentor-card">
      <img
        class="mentor-photo"
        :src="mentor.photo"
        :alt="'Photo of' + ' ' + mentor.name"
      />
    </div>
    <div class="mentor-info">
      <div class="namecard">
        <h2>{{ mentor.name }}</h2>
        <h5>Timezone: {{ mentor.timezone }}</h5>
      </div>
      <div class="skills">
        <SkillsetIcon
          v-for="skill in mentor.skillset"
          v-bind:key="skill"
          v-bind:skill="skill"
          v-bind:colored="true"
        />
      </div>
      <div class="bio">
        <p>{{ mentor.bio }}</p>
      </div>
      <button class="btn btn-light" @click="submit">Book Me!</button>
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
  </div>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import SkillsetIcon from "../components/SkillsetIcon";

export default {
  components: {
    StripeCheckout,
    SkillsetIcon,
  },
  name: "MentorFull",
  created: function() {
    console.log(this.$store.state.selectedMentor);
    const selectedMentorIsSet = Object.prototype.hasOwnProperty.call(
      this.$store.state.selectedMentor,
      "id"
    );
    if (selectedMentorIsSet) {
      this.mentor = this.$store.state.selectedMentor;
    } else {
      this.$router.push("/mentors");
    }
  },

  data() {
    return {
      //holy crap this is dangerous, but.. yolo. (P.S.: Don't snitch to Daniel)
      mentor: {},
      publishableKey:
        "pk_test_51IpqCvBT4mSoUdNPjf9RrACj7VVHpPNlpiD71P8aSCFgSmuHvB1EESlpTL8arv2w2xwK4LvUMAFzAZrYkpPAakaK00OJvx7Azh",
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
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>

<style scoped>
.mentor-full {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url("https://img.pngio.com/dark-grey-background-high-resolution-photo-isk6e-free-dragonfly-dark-grey-png-1920_1200.png");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: white;
}

.mentor-photo {
  height: 30vh;
  width: 30vh;
  border-radius: 50%;
  object-fit: cover;
}

.mentor-info {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 2rem;
}

button {
  margin-top: 1rem;
  align-self: center;
}
</style>
