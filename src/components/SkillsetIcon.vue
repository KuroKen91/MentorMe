<template>
  <i :class="'skill colored ' + icons[skill]"></i>
</template>

<script>
export default {
  name: "SkillsetIcon",
  props: ["skill"],
  data: function() {
    return {
      icons: {
        c: "devicon-c-plain",
        cplusplus: "devicon-cplusplus-plain",
        java: "devicon-java-plain",
        javascript: "devicon-javascript-plain",
        ruby: "devicon-ruby-plain",
        postgresql: "devicon-postgresql-plain",
      },
    };
  },
};
</script>

<style scoped>
.skill {
  font-size: 2rem;
  margin: 0.5rem;
}
</style>
