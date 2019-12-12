
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, step: "mix ingredients"},
        {id: 2, step: "cook ingredients"},
        {id: 3, step: "eat ingredients"}
      ]);
    });
};
