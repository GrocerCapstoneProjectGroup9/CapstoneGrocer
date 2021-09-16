//load the module
let mongoose = require("mongoose");

//avoid s and lower case
mongoose.pluralize(null);

//create the schema
let productSchema = mongoose.Schema({
    
    name:String,
    quantity:Number,
    price:Number
});

//using schema creating model
let productModel = mongoose.model("Product",productSchema);

//export here and import in another file using require
module.exports = productModel;