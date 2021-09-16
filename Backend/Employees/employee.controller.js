let employeeModel = require('./employee.model');
let objectId = require('mongodb').ObjectId;
let ticketModel = require('../User/user-model/ticket.model')
let userModel = require('../User/user-model/user.model')
let requestModel = require('../Requests/model/requests.model')
let orderModel = require('../User/user-model/sales.model')

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
    });
};

//Changes the status of an order
//needs change based on sale model
let changestatus = (req,res) => {
    let status = req.body.status;
    let orderid = req.body.orderid;
    orderModel.updateOne({_id:orderid},{$set:{status:status}},(err,res) => {
        if(!err){
            if (result.modifiedCount > 0){
                res.send('Status updated.');
            }
            else{
                res.send('Order not found');
            }
        }
    });
    if (status == "Cancelled"){
        orderModel.find({_id:orderid},(err,res)=>{
            if(!err){
                let refund = res.total;
                userModel.find({_id:res.userId},(error,result)=>{
                    if(!error){
                        refund = refund + result.funds;
                        userModel.updateOne({_id:res.userId},{$set:{funds:refund}},(error1,temp)=>{
                            if(!error1){
                                if (result.modifiedCount > 0){
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
    };
};

//unlocks a user account
//might need to search for email
let unlockuser = (req,res) => {
    let email = req.body.email;
    userModel.updateOne({email:email},{$set:{locked:false}},(err,res) => {
        if(!err){
            if (result.modifiedCount > 0){
                res.send('User unlocked.');
            }
            else{
                res.send('User not found');
            }
        }
    })
};


//changes the employee password
let editpass = (req,res) => {
    let pass = req.body.pass;
    let email = req.body.email;
    employeeModel.updateOne({email:email},{$set:{password:pass}}, (err,result) =>{
        if (!err){
            if (result.modifiedCount > 0){
                res.send('Password updated.');
            }
            else{
                res.send('Employee not found');
            }
        }
    })
};

//obtain tickets
let gettickets = (req,res) =>{
    ticketModel.find({},(err,result)=>{
        if (!err){
            res.send(result);
        }
    })
};


module.exports = {gettickets, editpass, unlockuser, changestatus, storerequest, getEmployeeByEmail};