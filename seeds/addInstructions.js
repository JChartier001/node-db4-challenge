
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, steps: "mix ingredients"},
        {id: 2, steps: "cook ingredients"},
        {id: 3, steps: "eat ingredients"}
      ]);
    });
};
