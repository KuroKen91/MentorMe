<template>
  <div>
    <b-card
      :title="this.mentorData.name"
      :img-src="this.mentorData.photoURL"
      :img-alt="'Photo of' + ' ' + this.mentorData.name"
      img-top
      tag="article"
      style="max-width: 15rem"
      class="mb-2"
    >
      <b-card-text>
        {{ this.mentorData.tag }}
      </b-card-text>
      <router-link to="/mentorfull">
        <b-button variant="primary" @click="setSelectedMentor"
          >See More</b-button
        >
      </router-link>
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
      tag: String,
    },
  },
  methods: {
    setSelectedMentor() {
      this.$store.commit("setSelectedMentor", this.mentorData);
    },
  },
};
</script>

<style scoped></style>
