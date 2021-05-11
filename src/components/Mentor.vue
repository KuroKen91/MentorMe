<template>
  <div>
    <b-card
      title="Card Title"
      :img-src="this.mentorData.photoURL"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Mentor",
  props: {
      mentorData: {
          name: String,
          photoURL: String
      }
  }
};
</script>

<style scoped>
</style>
