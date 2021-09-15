let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.pluralize(null);
let UserSchema = mongoose.Schema({
    fname:String,
    lname:String,
    email:{type:String},
    pass:{type:String},
    phone:Number,
    address:String,
    funds:Number,
    locked:Boolean
})
let UserModel = mongoose.model("User",UserSchema);

module.exports = UserModel;