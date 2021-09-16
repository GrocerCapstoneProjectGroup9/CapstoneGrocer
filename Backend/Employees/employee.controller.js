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
let storerequest = (req,res) => {
    let message = req.body.message;
    let email = req.body.email;
    let id = req.body.id;
    let amount = req.body.amount;
    let request = new requestModel({empID:email,productID:id,productName:amount,reqMsg:message});
    requestModel.insertMany(request,(err,result)=>{
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
    orderModel.updateOne({_id:orderid},{$set:{orderStatus:status}},(err,result) => {
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
                        refund = refund + res.funds;
                        userModel.updateOne({_id:res.userId},{$set:{funds:refund}})
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
    userModel.updateOne({email:email},{$set:{locked:false}},(err,result) => {
        if(!err){
            if (result.modifiedCount > 0){
                ticketModel.deleteOne({email:email},(err,result) => {
                    if(!err){
                        console.log(result);
                    }
                });
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

let insertEmployee = async (request,response)=> {
    let empl = request.body;    // receive the data from post method
    let emplInfo = await employeeModel.findOne({email:empl.email});
    if(emplInfo==null){
        empl.password="welcome123"
        let result = await employeeModel.insertMany(empl);
        
        response.send("Employee created successfully");
    }else {
        response.send("Email Id must be unique");
    }    
}


module.exports = {gettickets, editpass, unlockuser, changestatus, storerequest, getEmployeeByEmail, insertEmployee};