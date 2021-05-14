<template>
  <i
    :class="'skill' + (colored ? ' colored ' : ' ') + icons[skill]"
    @click="handleClick(skill)"
  ></i>
</template>

<script>
export default {
  name: "SkillsetIcon",
  props: ["skill", "colored", "clickable"],
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
  methods: {
    handleClick: function(skill) {
      if (this.clickable) {
        this.colored = !this.colored;
        this.$emit("toggleSkill", skill);
      }
    },
  },
};
</script>

<style scoped>
.skill {
  font-size: 2rem;
  margin: 0.5rem;
}

.skill:hover {
  cursor: pointer;
}
</style>
