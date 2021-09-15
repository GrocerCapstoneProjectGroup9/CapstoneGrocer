let express = require('express');
let router = express.Router();
let UserController=require("../user-controller/user.controller")
//http://localhost:9090/api/user/signIn
router.post("/signIn",UserController.signIn);
//http://localhost:9090/api/user/signUp
router.post("/signUp",UserController.signUp);
//http://localhost:9090/api/user/addItemtoCart
router.put("/addItemtoCart/:email",UserController.addItemtoCart);
//http://localhost:9090/api/user/deleteItemfromCart
router.post("/deleteItemfromCart",UserController.deleteItemFromCart);
//http://localhost:9090/api/user/unlockUser
router.post("/unlockUser",UserController.UnlockUser);
//http://localhost:9090/api/user/updateUserEmail
router.put("/updateUserEmail/:email",UserController.updateUserEmail);
//http://localhost:9090/api/user/updatePassword
router.post("/updatePassword",UserController.updatePassword);
//http://localhost:9090/api/user/updateAddress
router.put("/updateAddress/:email",UserController.updateAddress);
//http://localhost:9090/api/user/updatePhone
router.put("/updatePhone/:email",UserController.updatePhone);
//http://localhost:9090/api/user/updatePhone
router.put("/updateCartItem/:email",UserController.updateCartItem);
//http://localhost:9090/api/user/getCartItems
router.get("/getCartItems/:email",UserController.getItemsFromCart);
module.exports=router;