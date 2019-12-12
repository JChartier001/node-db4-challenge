
exports.up = function(knex) {
    return knex.schema
    .createTable("ingredients", tbl=> {
        tbl.increments();
        tbl.string("name", 255 )
        .notNullable();       
    })
    .createTable("instructions", tbl => {
        tbl.increments();
        tbl.string("description")
        .notNullable()
    })
    .createTable("reciples", tbl => {
        tbl.increments();
        tbl.string("name");
        tbl.integer("ingredient_id")
        .unsigned()
        .notNullable()
        .refereces('id')
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onChange('CASCADE')
        tbl.integer("instruction_id")
        .unsigned()
        .notNullable()
        .refereces('id')
        .inTable("instructions")
        .onDelete("RESTRICT")
        .onChange('CASCADE')
    })  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ingredients")
  .dropTableIfExists("instructions")
  .dropTableIfExists('recipes');
};
