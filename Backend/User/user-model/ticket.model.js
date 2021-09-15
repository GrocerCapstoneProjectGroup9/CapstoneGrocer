let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let TicketSchema = mongoose.Schema({
    _id:String,
    reason:String,
})
let TicketModel = mongoose.model("Tickets",TicketSchema);
module.exports = TicketModel;