const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const history = require("connect-history-api-fallback");

const path = require("path");
const db = require("./knex");
const app = express();

app.get("/api/mentors", async (req, res) => {
  const allMentors = await db("mentors").select();
  for (let mentor of allMentors) {
    mentor.skillset = (
      await db("skillset")
        .select("skill")
        .where("id", mentor.id)
    ).map((skill) => skill.skill);
  }
  res.json(allMentors);
});

app.use(history());

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "..", "dist")));

module.exports = app;
