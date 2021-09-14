let express = require('express');
let router = express.Router();

let EmployeeController = require('../employee.controller.js');

router.get('/getEmployeeById/:pid', EmployeeController.getEmployeeById);
router.post('/addEmployee', EmployeeController.employeeUserDetails);
router.delete('/deleteEmployeeById/:pid', EmployeeController.deleteEmployeeById);
router.put('/editEmployeeProfile', EmployeeController.editEmployeeProfile);
router.put('/changeEmployeePassword/:eid',EmployeeController.changeEmployeePassword);

module.exports = router;