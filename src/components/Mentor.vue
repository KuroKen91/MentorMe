<template>
  <div>
    <b-card
      :title="this.mentorData.name"
      :img-src="this.mentorData.photo"
      :img-alt="'Photo of' + ' ' +this.mentorData.name"
      img-top
      tag="article"
      style="max-width: 15rem"
      class="mb-2"
    >
    <div>
      {{ this.mentorData.skillset }}
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
export default {
  name: "Mentor",
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
</script>

<style scoped>
</style>
