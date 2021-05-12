const skillset = require("./data/skillset");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("skillset")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("skillset").insert(skillset);
    });
};
