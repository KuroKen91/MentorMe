
exports.up = function(knex) {
    return knex.schema.table("mentors", function(table) {
        table.text("timezone");
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.table("", function(table) {
        table.dropColumn("timezone");
    })
  };
  