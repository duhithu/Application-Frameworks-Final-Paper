const Category = require('../models/category.model');

const createCategory = async (req, res) => {
    if(req.body){
        const category = new Category(req.body);
        await category.save()
            .then(data => {
                res.status(200).send({data: data});
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

//populate() For get the individual details for a given parent
const getAllCategories = async (req, res) =>{
    await Category.find({}).populate('foods', 'code name amount size')
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
}

const getFoodsForCategories = async (req, res) => {
    if(req.params && req.params.id) {
        await Category.findById(req.params.id)
            .populate('foods', 'code name amount size')
            .then(data => {
                res.status(200).send({foods: data.foods });
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

//calculation
const calculateAmount = async (req, res) => {
    if (req.params && req.params.id) {
        const category = await Category.findById(req.params.id).populate('foods', 'amount')
        let totalAmount = 0;
        if (category.foods.length > 0) {
            category.foods.map((food) => {
                totalAmount += food.amount;
            });
        }
        res.status(200).send({ totalAmount: totalAmount });
    }
}

module.exports = {
    createCategory,
    getAllCategories,
    getFoodsForCategories,
    calculateAmount
};