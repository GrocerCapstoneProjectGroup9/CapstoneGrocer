
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let Saleschema = mongoose.Schema({
       pid:String,
       name:String,
       price:Number,
       quantity:Number,
       datePurchased:String,
       orderStatus:String,
       userId:String
})
let SalesModel = mongoose.model("SoldItems",Saleschema);
module.exports = SalesModel;