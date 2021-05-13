exports.up = function(knex) {
  return knex.schema.createTable("mentors", (table) => {
    table.uuid("id");
    table.text("name");
    table.text("photo");
    table.text("bio");
    table.text("tag");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("mentors");
};
