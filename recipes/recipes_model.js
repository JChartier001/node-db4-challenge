const db = require('../data/dbconfig.js');

module.exports ={
    getRecipes,
    getIngredients,
    getShoppingList
}





function getRecipes(){
    return db('recipes');
}

function getShoppingList(id){
    return db("recipes as r").select('i.name as Ingredient Name', "r.ingredient_quantity as quantity")
    .join('ingredients as i', "i.id", "r.ingredient.id")
    .where({id});
}

function getIngredients(id){
return db("recipes as r").select('i.steps as Instructions')
.join('instructions as i', "i.id", "r.instruction_id")
.where({id});
}