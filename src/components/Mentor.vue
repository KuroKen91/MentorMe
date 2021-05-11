<template>
  <div>
    <b-card
      :title="this.mentorData.name"
      :img-src="this.mentorData.photoURL"
      :img-alt="this.mentorData.name"
      img-top
      tag="article"
      style="max-width: 15rem"
      class="mb-2"
    >
      <b-card-text>
        {{this.mentorData.bio}}
      </b-card-text>

      <b-button href="#" variant="primary">Book Me</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Mentor",
  props: {
      mentorData: {
          name: String,
          photoURL: String,
          bio: String,
      }
  }
};
</script>

<style scoped>
</style>
