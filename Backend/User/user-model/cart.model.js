let mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
mongoose.pluralize(null);
let CartSchema = mongoose.Schema({
    userId:String,
    pid: String,
    quantity: Number,
    name: String,
    price: Number,
   
})
let CartModel = mongoose.model("Cart", CartSchema);
module.exports = CartModel;