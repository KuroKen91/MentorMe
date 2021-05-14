<template>
  <div class="register-page">
    <div id="reg-form">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-name"
          label="Name:"
          label-for="input-name"
        >
          <b-form-input
            id="input-name"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-picture"
          label="Picture:"
          label-for="input-picture"
        >
          <b-form-input
            id="input-picture"
            v-model="form.photo"
            placeholder="Profile picture url"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-email"
          label="Email:"
          label-for="input-email"
        >
          <b-form-input
            id="input-email"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-rate"
          label="Rate:"
          label-for="input-rate"
        >
          <b-form-input
            id="input-rate"
            v-model="form.rate"
            type="number"
            placeholder="Enter rate per session"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-tag" label="Tag:" label-for="input-tag">
          <b-form-input
            id="input-tag"
            v-model="form.tag"
            placeholder="Enter a one line description of yourself"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-bio" label="Bio:" label-for="input-bio">
          <b-form-textarea
            id="input-bio"
            v-model="form.bio"
            placeholder="Enter a brief bio."
            required
          ></b-form-textarea>
        </b-form-group>

        <b-form-group
          id="input-group-timezone"
          label="Timezone:"
          label-for="input-timezone"
        >
          <b-form-select
            id="input-timezone"
            v-model="form.timezone"
            :options="timezones"
            required
          ></b-form-select>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
    <div class="skills">
      <SkillsetIcon
        v-for="(skill, i) of fetchedSkillset"
        :key="i"
        v-bind:skill="skill"
        v-bind:clickable="true"
        @toggleSkill="toggleSkill"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SkillsetIcon from "../components/SkillsetIcon";

export default {
  data() {
    return {
      fetchedSkillset: [],
      form: {
        name: "",
        photo: "",
        email: "",
        rate: null,
        skillset: [],
        tag: "",
        bio: "",
        timezone: null,
      },
      timezones: [
        { text: "Select One", value: null },
        "Tokyo/Seoul",
        "Central Time (US & Canada)",
        "Eastern Time (US & Canada)",
      ],
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      console.log(this.form.skillset);
      await axios.post("/mentors/new", this.form);
      console.log("before router push");
      this.$router.push("/mentors");
      console.log("after router push");
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    toggleSkill(clickedSkill) {
      if (this.form.skillset.includes(clickedSkill)) {
        this.form.skillset = this.form.skillset.filter(
          (skill) => skill !== clickedSkill
        );
      } else {
        this.form.skillset.push(clickedSkill);
      }
    },
  },
  components: {
    SkillsetIcon,
  },
  async created() {
    const { data: skills } = await axios.get("/api/skillset");
    this.fetchedSkillset = skills;
  },
};
</script>

<style scoped>
input,
select,
textarea {
  margin-bottom: 1rem;
}

.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url("https://img.pngio.com/dark-grey-background-high-resolution-photo-isk6e-free-dragonfly-dark-grey-png-1920_1200.png");
  height: 100vh;
  width: 100vw;
}

#reg-form {
  margin-top: 5rem;
}

.skills {
  margin: 5rem;
  width: 10rem;
  word-wrap: break-word;
  line-height: 3rem;
}

.skill {
  font-size: 3rem !important;
}

button {
  margin: 1rem;
}
</style>
