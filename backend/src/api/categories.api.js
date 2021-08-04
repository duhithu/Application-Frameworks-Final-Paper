const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category.controller');

module.exports = function (){
    router.post('/create', CategoryController.createCategory);
    router.get('/', CategoryController.getAllCategories);
    router.get('/:id', CategoryController.getFoodsForCategories);
    router.get('/amount/:id', CategoryController.calculateAmount);
    return router;
}