
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let Saleschema = mongoose.Schema({
       _id:Number,
       userId:String, //this is userId
       items: [{
           pid:String,
           name:String,
           price:Number,
           quantity:Number,

       }],
       orderStatus:String,
       total:Number
})
let SalesModel = mongoose.model("SoldItems",Saleschema);
module.exports = SalesModel;