let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let EmployeeSchema = mongoose.Schema(
    {
        firstName:String,
        lastName:String,
        email:String,
        password:String
    });

    let employeeModel = mongoose.model("employee",EmployeeSchema,"Employee");

    module.exports = employeeModel;