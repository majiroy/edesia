exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments("user_id");
    table.string("name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
