
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: "Flour"},
        {id: 2, name: "Eggs"},
        {id: 3, name: "Sugar"} 
        
      ]);
    });
};
