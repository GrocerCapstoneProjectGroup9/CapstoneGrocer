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
//http://localhost:9090/api/user/updateCartItem
router.put("/updateCartItem/:email",UserController.updateCartItem);
//http://localhost:9090/api/user/getCartItems
router.get("/getCartItems/:email",UserController.getItemsFromCart);
//http://localhost:9090/api/user/purchase
router.put("/purchase/:email",UserController.addItemtoSales);
//http://localhost:9090/api/user/getOrderofUser
router.get("/getOrderofUser/:email",UserController.getOrdersOfUser);
//http://localhost:9090/api/user/getAllOrders
router.get("/getAllOrders",UserController.getAllorders);
//http://localhost:9090/api/user/raiseTicket
router.post("/raiseTicket",UserController.RaiseTicket);
//http://localhost:9090/api/user/getAllTickets
router.get("/getAllTickets",UserController.getAllTickets);
//http://localhost:9090/api/user/lockUser
router.put("/lockUser/:email",UserController.lockUser)
module.exports=router;