const Food = require("../models/foods.model");

//create a arrow function with async to create 
const createFood = async (req, res) => {
    if (req.body) {     //check if the req body is there or not
        const food = new Food(req.body); //pass the req data
        food.save()
            .then(data => {
                res.status(200).send({data: data}); //send the data
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}


//get
const getFoodForCategories = async (req, res) => {
    if(req.params && req.params.id) {
        await Food.find({'food._id': req.params.id})
            .then(response => {
                res.status(200).send({data: response });
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

//get
const getFood = async (req, res) => {
    await Food.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

// Update  
const updateFood = async (req, res) => {
    await Food.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('food updated successfully !')
        }
    })
};

module.exports = {
    createFood,
    getFood,
    getFoodForCategories,
    updateFood
};