const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const history = require("connect-history-api-fallback");
const stripe = require("stripe")(process.env.STRIPE_SK);
const path = require("path");
const db = require("./knex");
const { v4: uuid } = require("uuid");
const app = express();
app.use(cors());
app.use(express.json());

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

app.get("/api/skillset", async (req, res) => {
  const allSkills = (await db("skillset").select("skill")).map(
    (skill) => skill.skill
  );
  res.json(allSkills);
});

app.post("/mentors/new", async (req, res) => {
  console.log(req.body, process.env.STRIPE_SK);
  const id = uuid();

  const { name, photo, bio, tag, rate, skillset, timezone } = req.body;

  const product = await stripe.products.create({
    name: `Mentoring Session With ${name}`,
    description: `One (1) hour mentor session with mentor ${name}`,
  });

  const price = await stripe.prices.create({
    unit_amount: rate,
    currency: "jpy",
    product: product.id,
  });
  const newMentor = {
    id,
    name,
    photo,
    bio,
    tag,
    priceID: price.id,
    timezone,
  };
  await db("mentors").insert(newMentor);

  for (let skill of skillset) {
    await db("skillset").insert({
      id,
      skill,
    });
  }
  res.json("ok");
});

app.use(history());

app.use(morgan("tiny"));

app.use(express.static(path.resolve(__dirname, "..", "dist")));

module.exports = app;
