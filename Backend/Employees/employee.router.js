let express = require('express');
let router = express.Router();

let EmployeeController = require('./employee.controller.js');

router.get('/getEmployeeByEmail/:email', EmployeeController.getEmployeeByEmail);
router.post('/addEmployee', EmployeeController.employeeUserDetails);
router.delete('/deleteEmployeeById/:pid', EmployeeController.deleteEmployeeById);
router.put('/editEmployeeProfile', EmployeeController.editEmployeeProfile);
router.put('/changeEmployeePassword/:eid',EmployeeController.changeEmployeePassword);

router.post('/storerequest', EmployeeController.storerequest);
router.put('/changestatus', EmployeeController.changestatus);
router.put('/unlockuser', EmployeeController.unlockuser);
router.put('/editpass', EmployeeController.editpass);


module.exports = router;