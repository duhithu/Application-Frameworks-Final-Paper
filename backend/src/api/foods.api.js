const express = require('express');
const router = express.Router();        // import the interface for create endpoints
const FoodController = require('../controllers/foods.controller');

module.exports = function (){
    router.post('/create', FoodController.createFood); //create reference
    router.get('/', FoodController.getFood);
    router.get('/:id', FoodController.getFoodForCategories);
    router.put('/update/:id', FoodController.updateFood);
    return router;
}