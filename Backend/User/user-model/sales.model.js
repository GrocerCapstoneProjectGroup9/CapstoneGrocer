
let mongoose = require("mongoose");
//const autoIncrement=require("mongoose-sequence")(mongoose);
mongoose.Promise = global.Promise;

let Saleschema = mongoose.Schema({
       _id:Number,
       // orderid:{ type: Number, default: 0 },
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
//Saleschema.plugin(autoIncrement);
let SalesModel = mongoose.model("SoldItems",Saleschema);
module.exports = SalesModel;