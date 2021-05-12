
exports.up = function(knex) {
  return knex.schema.table("mentors", function(table) {
      table.text("priceID");
  })
};

exports.down = function(knex) {
  return knex.schema.table("", function(table) {
      table.dropColumn("priceID");
  })
};
