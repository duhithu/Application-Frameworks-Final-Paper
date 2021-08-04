//get the dependency
const mongoose = require('mongoose');

//create model class schema
const CategorySchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    description:{type: String, required: true, trim: true},
     
    foods: [{type: mongoose.Schema.Types.ObjectId, required: false, ref:'foods'}]

});

//save in  the mongodb as a model
const Category = mongoose.model('Categories', CategorySchema);
module.exports = Category; 