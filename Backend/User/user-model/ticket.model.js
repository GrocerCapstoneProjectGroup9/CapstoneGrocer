let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let TicketSchema = mongoose.Schema({
    email:String,
    issue:String
})
let TicketModel = mongoose.model("Tickets",TicketSchema);
module.exports = TicketModel;