
exports.up = function(knex) {
    return knex.schema
        .createTable('ingredients', tbl=> {
            tbl.increments();
            tbl.string('name')
            .notNullable()
            .unique();       
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.string('steps')
            .notNullable()
            .unique();
        })
        .createTable('reciples', tbl => {
            tbl.increments();
            tbl.string('name')
            .unique()
            .notNullable();
            tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
            tbl.integer('instruction_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('instructions')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
            tbl.string('ingredient_quantity')
            .notNullable();
        })  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients')
  .dropTableIfExists('instructions')
  .dropTableIfExists('recipes');
};
