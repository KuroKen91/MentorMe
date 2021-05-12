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
        />
      </div>
      <div>
        <b-card-text>
          {{ this.mentorData.tag }}
        </b-card-text>
        <router-link to="/mentorfull">
          <b-button variant="primary" @click="setSelectedMentor"
            >See More</b-button
          >
        </router-link>
      </div>
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
.skillset {
  display: flex;
  justify-content: center;
}
</style>
