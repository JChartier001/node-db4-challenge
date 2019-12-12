
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipies').insert([
        {id: 1, name:"Cake", ingredient_id: 1, instruction_id: 1, ingredient_quantity: "1 cup"},
        {id: 2, name:"Cake1", ingredient_id: 2, instruction_id: 2, ingredient_quantity: "1 cup"},
        {id: 3, name:"Cake2", ingredient_id: 3, instruction_id: 3, ingredient_quantity: "1 cup"}
      ]);
    });
};
