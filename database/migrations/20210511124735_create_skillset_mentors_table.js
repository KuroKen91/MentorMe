exports.up = function(knex) {
  return knex.schema.createTable("skillset", (table) => {
    table.text("id");
    table.text("skill");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("skillset");
};
