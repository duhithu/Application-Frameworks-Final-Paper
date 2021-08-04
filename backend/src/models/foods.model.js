const mongoose = require('mongoose');
//create model class schema (the way of save data)
const FoodSchema = new mongoose.Schema({
    code: {type: String, required: true, trim: true},
    name: {type: String, required: true, trim:true},
    amount: {type: Number, required:true},
    size: {type: Number, required:true},

    //many to many relation
    //save the reference
    categories: [{type: mongoose.Schema.Types.ObjectId, required: false, ref:'categories'}]

});

//save in  the mongodb as a model
const Food = mongoose.model('foods', FoodSchema);

module.exports = Food;