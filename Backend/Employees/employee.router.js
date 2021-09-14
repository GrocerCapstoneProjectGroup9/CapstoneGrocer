let express = require('express');
let router = express.Router();

let EmployeeController = require('../controlller/employee.controller.js');

router.get('/getEmployeeById/:pid', EmployeeController.getEmployeeById);
router.post('/addEmployee', EmployeeController.employeeUserDetails);
router.delete('/deleteEmpById/:pid', EmployeeController.deleteEmployeeById);
router.put('/editEmployeeProfile', EmployeeController.editEmployeeProfile);
router.put('/changeEmployeePassword/:eid',EmployeeController.changeEmployeePassword);
module.exports = router;