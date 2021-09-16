let employeeModel = require('./employee.model');
let objectId = require('mongodb').ObjectId;
let ticketModel = require('../User/user-model/ticket.model')
let userModel = require('../User/user-model/user.model')
let requestModel = require('../Requests/model/requests.model')
let orderModel = require('../User/user-model/sales.model')
//add admin model

let getEmployeeByEmail = (req,res) =>
{
    let email = req.params.email;
    
    employeeModel.find({email:email}, (err, result)=>
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

    employeeModel.save((err,result) =>
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
    employees.updateOne({_id: eid},{$set: {password: newPassword}}, (err, result) => 
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


//Store request to admin
//needs change based on request model
let storerequest = (req,res) => {
    let message = req.body.message;
    let request = new requestmodel({
        message:message
    });
    requestModel.insertMany([request],(err,res)=>{
        if (!err){
            res.send("Request added");
        }
    })
}

//Changes the status of an order
//needs change based on sale model
let changestatus = (req,res) => {
    let status = req.params.status;
    let orderid = req.params.orderid;
    orderModel.updateOne({_id:orderid},{$set:{status:status}},(err,res) => {
        if(!err){
            if (result.nModified > 0){
                res.send('Status updated.');
            }
            else{
                res.send('Order not found');
            }
        }
    })
    if (status == "Cancelled"){
        orderModel.find({_id:orderid},(err,res)=>{
            if(!err){
                let refund = res.total;
                userModel.find({_id:res.userId},(error,result)=>{
                    if(!error){
                        refund = refund + result.funds;
                        userModel.updateOne({_id:res.userId},{$set:{funds:refund}},(error1,temp)=>{
                            if(!error1){
                                if (result.nModified > 0){
                                    res.send('Refund given.');
                                }
                                else{
                                    res.send('Account not found');
                                }
                            }
                        })
                    }
                })
            }
        })
    }
}

//unlocks a user account
//might need to search for email
let unlockuser = (req,res) => {
    let id = req.body.user;
    userModel.updateOne({_id:id},{$set:{locked:false}},(err,res) => {
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

//obtain tickets
let gettickets = (req,res) =>{
    ticketModel.find({},(err,result)=>{
        if (!err){
            res.send(result);
        }
    })
}


module.exports = {gettickets, editpass, unlockuser, changestatus, storerequest, employeeUserDetails, deleteEmployeeById, editEmployeeProfile, getEmployeeByEmail, changeEmployeePassword };