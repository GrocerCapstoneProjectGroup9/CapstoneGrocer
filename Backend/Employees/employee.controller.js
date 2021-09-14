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