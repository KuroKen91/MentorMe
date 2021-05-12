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
      <b-card-text>
        {{ this.mentorData.tag }}
      </b-card-text>
      <b-button href="#" variant="primary" @click="sendMentorEmit"
        >See More</b-button
      >
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
    },
  },
  methods: {
    sendMentorEmit() {
      this.$emit("mentor-full-please", this.mentorData.name);
    },
  },
};
//this is for pushing
</script>

<style scoped>
.skillset {
  display: flex;
  justify-content: center;
}
</style>
