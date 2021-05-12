const mentors = require("./data/mentors");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("mentors")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("mentors").insert(mentors);
    });
};
