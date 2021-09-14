let express = require('express');
let router = express.Router();
let UserController=require("../user-controller/user.controller")
router.post("/signIn",UserController.signIn);
router.post("/signUp",UserController.signUp);
module.exports=router;