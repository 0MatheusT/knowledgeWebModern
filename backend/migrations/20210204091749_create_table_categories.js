
exports.up = function(knex, promise) {
  return knex.schema.createTable('categories', table => {
      table.increments('id').primary()
      table.string('name').notNull()
      table.integer('parentId').references('id')
          .inTable('categories')
  })
};

exports.down = function(knex, promise) {
  return knex.schema.dropTable('categories')
};
