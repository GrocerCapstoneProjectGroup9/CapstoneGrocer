let employeeModel = require('../employee.model.js');
let objectId = require('mongodb').ObjectId;
//add admin model

let getEmployeeById = (req,res) =>
{
    let pid = req.params.pid;
    employeeModel.find({_id: new ObjectId(pid)}, (erre, result)=>
    {
        if(err){console.error(err)}
        else
        {
            res.json(result);
        }
    });
};

let employeeUserDetails = (req,res) =>
{
    let employee = new employeeModel(
        {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password: 'defaultpassword'
        });

    empoloyee.save((err,result) =>
    {
        if(err)
        {
            res.send("Record save unsuccessful.");
        }
        else
        {
            res.send("Record saved successfully.");
        }
    })
}

let deleteEmployeeById = (req,res) =>
{
    let pid = req.params.pid;

    employeeModel.deleteOne({_id:pid}, (err,result) => 
    {
        if(!err)
        {
            if(result.deletedCount > 0)
            {
                res.send('Employee deleted successfully.');
            }
            else
            {
                res.send('Employee with Id ' + pid + ' does not exist.')
            }
        }
    })
}

let editEmployeeProfile = (req,res) =>
{
    let eid = req.body.eid;
    let newEmail = req.body.email.trim();
    let newFirstName = req.body.firstName.trim();
    let newLastName = req.body.lastName.trim();
    let newPassword = req.body.password.trim();

    employeeModel.updateOne(
        {_id: new ObjectId(eid)},
        {
            $set:
            {
                firstName:newFirstName,
                lastName:newLastName,
                email:newEmail,
                password:newPassword
            }
        }
    ).then((obj) => {console.log(obj);});
}

let changeEmployeePassword = (req,res) => 
{
    let eid = req.params.eid;
    let newPassword = req.body.newPassword;
    console.log(eid, newPassword)
    EmployeeModel.updateOne({_id: eid},{$set: {password: newPassword}}, (err, result) => 
    {
        if (!err) 
        {
        if (result.nModified > 0) 
        {
            res.send('Employee password updated successfully.');
        } 
        else
        {
            res.send('Employee with Id ' + eid + ' does not exist.');
        }
        }
    });
}

let storerequest = (req,res) => {
    let message = req.body.message;
    let request = new requestmodel({
        message:message
    });
    messagemodel.insertMany([request],(err,res)=>{
        if (!err){
            res.send("Request added");
        }
    })
}

let changestatus = (req,res) => {
    let status = req.params.status;
    let orderid = req.params.orderid;
    ordermodel.updateOne({_id:orderid},{$set:{status:status}},(err,res) => {
        if(!err){
            if (result.nModified > 0){
                res.send('Status updated.');
            }
            else{
                res.send('Order not found');
            }
        }
    })
}

//unlocks a user account
let unlockuser = (req,res) => {
    let id = req.body.user;
    usermodel.updateOne({_id:id},{$set:{lock:false}},(err,res) => {
        if(!err){
            if (result.nModified > 0){
                res.send('User unlocked.');
            }
            else{
                res.send('User not found');
            }
        }
    })
}

//show all user accounts
let getaccounts = (req,res) => {
    let result = '';
    usermodel.find({},(err,res) =>{
        if(!err){
            res.foreach(res =>{
                result = ""
            })
            res.send(result);
        }
    })
}

//changes the employee password
let editpass = (req,res) => {
    let pass = req.params.pass;
    let id = req.params.id;
    employeeModel.updateOne({_id:id},{$set: {password:pass}}, (err,result) =>{
        if (!err){
            if (result.nModified > 0){
                res.send('Password updated.');
            }
            else{
                res.send('Employee not found');
            }
        }
    })
}


module.exports = { employeeUserDetails, deleteEmployeeById, editEmployeeProfile, getEmployeeById, changeEmployeePassword };