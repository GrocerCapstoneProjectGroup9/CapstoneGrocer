let employeeModel = require('../employee.model.js');
let objectId = require('mongodb').ObjectId;

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

module.exports = { employeeUserDetails, deleteEmployeeById, editEmployeeProfile, getEmployeeById, changeEmployeePassword };