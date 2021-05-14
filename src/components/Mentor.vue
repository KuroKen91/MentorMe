<template>
  <div>
    <b-card
      :title="this.mentorData.name"
      :img-src="this.mentorData.photo"
      :img-alt="'Photo of' + ' ' + this.mentorData.name"
      img-top
      tag="article"
      style="max-width: 15rem"
      class="mb-2"
    >
      <div class="skillset">
        <SkillsetIcon
          v-for="skill of mentorData.skillset"
          v-bind:key="skill"
          v-bind:skill="skill"
          v-bind:colored="true"
        />
      </div>
      <div>
        <b-card-text>
          {{ this.mentorData.tag }}
        </b-card-text>
      </div>

      <router-link to="/mentorfull">
        <b-button variant="dark" @click="setSelectedMentor">See More</b-button>
      </router-link>
    </b-card>
  </div>
</template>

<script>
import SkillsetIcon from "./SkillsetIcon";
export default {
  name: "Mentor",
  components: {
    SkillsetIcon,
  },
  props: {
    mentorData: {
      name: String,
      photo: String,
      tag: String,
      bio: String,
      skillset: Array,
      priceID: String,
      timezone: String,
    },
  },
  methods: {
    setSelectedMentor() {
      this.$store.commit("setSelectedMentor", this.mentorData);
    },
  },
};
</script>

<style scoped>
.card {
  height: 28rem;
  position: relative;
}

button {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -1%);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.skillset {
  display: flex;
  justify-content: center;
}
</style>
