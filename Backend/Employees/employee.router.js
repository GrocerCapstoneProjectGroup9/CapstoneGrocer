let express = require('express');
let router = express.Router();

let EmployeeController = require('./employee.controller');

router.get('/getEmployeeByEmail/:email', EmployeeController.getEmployeeByEmail);
router.post('/storerequest', EmployeeController.storerequest);
router.put('/changestatus', EmployeeController.changestatus);
router.put('/unlockuser', EmployeeController.unlockuser);
router.put('/editpass', EmployeeController.editpass);
router.put('/gettickets', EmployeeController.gettickets);
router.put('/addEmployee', EmployeeController.insertEmployee);


module.exports = router;