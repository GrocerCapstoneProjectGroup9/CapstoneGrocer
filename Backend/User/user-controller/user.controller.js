let UserModel=require("../user-model/user.model");
let CartModel=require("../user-model/cart.model");
let SalesModel=require("../user-model/sales.model");
let TicketModel=require("../user-model/ticket.model");
const { request, response } = require("express");


let signIn = async (request,response)=> {
    let user = request.body;    // receive the data from post method
    let userInfo = await UserModel.findOne({email:user.email,password:user.password,locked:false});
    if(userInfo!=null){
        response.send("Success");      
    }else {
        response.send("fail");
    }
}
let signUp = async (request,response)=> {
    let user = request.body;    // receive the data from post method
    let userInfo = await UserModel.findOne({email:user.email});
    if(userInfo==null){
        user.funds=1000;
        user.locked=false;
        let result = await UserModel.insertMany(user);
        
        response.send("Account created successfully");
    }else {
        response.send("Email Id must be unqiue");
    }    
}

let addItemtoCart=async (request,response)=>{
    let userId=request.params.email;
    
    let cartItem=request.body;
    console.log(cartItem.pid);
    cartItem.userId=userId;
     let isItemPresent=await CartModel.findOne(
        {userId:userId,pid:cartItem.pid})
    if(isItemPresent==null){
        let result = await CartModel.insertMany(cartItem);
        response.send("ItemAdded")
    }
    else{
         console.log(isItemPresent);
        await CartModel.updateMany(
               {email:userId,pid:cartItem.pid},{$set:{quantity:(cartItem.quantity)}})
               response.send("ItemUpdated")
     }
}
let updateCartItem=async (request,response)=>{
    let userId=request.params.email;
    let cartItem=request.body;
     let isItemPresent=await CartModel.findOne(
        {email:userId,pid:cartItem.pid})
      if(isItemPresent!=null){
        await CartModel.updateOne(
            {email:userId,pid:cartItem.pid},{$set:{quantity:(cartItem.quantity)}})
            response.send("ItemUpdated")
    }
    else{
        response.send("ItemNotpresnt")
     }
}



let deleteItemFromCart = async (request,response)=> {
    let cartItem=request.body;
    await CartModel.deleteOne({pid:cartItem.pid,email:cartItem.userId},(err,result)=> {
        if(!err){
            response.send(result)
        }else {
            response.send(err);
        }
    })
}

let UnlockUser = async (request, response) => {
    let user=request.body;
    console.log(user.userId);
    await UserModel.updateOne(
        {email:user.userId},{$set:{locked:false}})
     response.send("userUnlocked");
  };
let updateUserEmail = async(request,response)=>{
    let oldemailid=request.params.email;
    let newEmailid=request.body.email;
    UserModel.updateOne(
        {email:oldemailid},{$set :{email:newEmailid}},(err,result)=>{
            if(!err){
                //console.log(result)
                if(result.modifiedCount>0 || result.matchedCount>0){
                        //console.log("emailUpdated")
                        response.send("emailUpdated")
                }else {
                        //console.log("emailNotUpdated");
                        response.send("emailNotUpdated");
                }
            }else {
                console.log(err);
            }
        }
    )
    //response.send("emailUpdated");
};
let updatePassword = async(request,response)=>{
    let userdetails=request.body;
    UserModel.updateOne(
        {email:userdetails.email},{$set :{password:userdetails.password}},(err,result)=>{
            if(!err){
                //console.log(result)
                if(result.modifiedCount>0 || result.matchedCount>0){
                        //console.log("emailUpdated")
                        response.send("PasswordUpdated")
                }else {
                        //console.log("emailNotUpdated");
                        response.send("PasswordNotUpdated");
                }
            }else {
                console.log(err);
            }
        }
    )
    //response.send("emailUpdated");
};
let updateAddress = async(request,response)=>{
    let userId=request.params.email;
    let userdetails=request.body;
    UserModel.updateOne(
        {email:userId},{$set :{address:userdetails.address}},(err,result)=>{
            if(!err){
                //console.log(result)
                if(result.modifiedCount>0 || result.matchedCount>0){
                        //console.log("emailUpdated")
                        response.send("AddressUpdated")
                }else {
                        //console.log("emailNotUpdated");
                        response.send("AddressdNotUpdated");
                }
            }else {
                console.log(err);
            }
        }
    )
    //response.send("emailUpdated");
};
let updatePhone = async(request,response)=>{
    let userId=request.params.email;
    console.log(userId)
    let userdetails=request.body;
    console.log(userdetails)
    UserModel.updateOne(
        {email:userId},{$set :{phone:userdetails.phone}},(err,result)=>{
            if(!err){
                //console.log(result)
                if(result.modifiedCount>0 || result.matchedCount>0){
                        //console.log("emailUpdated")
                        response.send("PhoneUpdated")
                }else {
                        //console.log("emailNotUpdated");
                        response.send("PhoneNotUpdated");
                }
            }else {
                console.log(err);
            }
        }
    )
    //response.send("emailUpdated");
};
let getItemsFromCart=(request,response)=>{
    let userId=request.params.email;
    CartModel.find({userId:userId},(err,result)=>{
        if(!err){
            response.json(result)
        }
        else{
            response.json(err);
        }
    
    });
}
let addItemtoSales = async (request,response)=>{
    let userId=request.params.email;
    orderDetails=request.body
    //console.log(userId);
    console.log(orderDetails);
    SalesModel.insertMany({userId:userId,
        items:orderDetails,
        total:request.body.total,orderStatus:"Ordered",orderid:1},(err,result)=>{
            if(!err){
                response.send("ItemAddedToSales");
            }
            else{
                response.send("ItemNotAddedToSales");
            }
        });
}
let getOrdersOfUser=(request,response)=>{
    let userId=request.params.email;
    SalesModel.find({userId:userId},(err,result)=>{
        if(!err){
            response.json(result)
        }
        else{
            response.json(err);
        }
    
    });
}
let getAllorders=(request,response)=>{
  
    SalesModel.find((err,result)=>{
        if(!err){
            response.json(result)
        }
        else{
            response.json(err);
        }
    
    });
}
let RaiseTicket=(request,response)=>{
    userDetails=request.body;
    let result=UserModel.findOne({email:userDetails.email})
    if(result==null){
        response.send("UserNotPresnt")
    }
    else{
        TicketModel.insertMany(userDetails,(err,result)=>{
            if(!err){
                response.send("TickedAdded")
            }
            else{
                console.log(err)
                response.send("TicketNotAdded")
            }
        });
    }
}
let getAllTickets=(request,response)=>{
    TicketModel.find((err,result)=>{
        if(!err){
            response.json(result);
        }
        else{
            response.json(err);
        }
    })
}
let lockUser=(request,response)=>{
 
    let email=request.body.email;
    console.log(email)
    UserModel.findOneAndUpdate({email:email},{$set:{locked:true}},(err,result)=>{
        if(!err){
            response.send("userLocked");
        }
    })
}


let addFunds=(req,res)=>
{
     
    
    let money = req.body.money;
    let id = req.body.id;

    console.log(money+id)
    UserModel.findOne({email:id},(err, result)=>
    {   
        console.log(money);
        money += result.funds;
        console.log(result.funds);
        console.log(money);
        UserModel.updateOne({email:id},{$set:{funds:money}},(err,result)=>
        {
            if(!err)
            {   
                if (result.nModified > 0 || result.matchedCount > 0){
                    res.send('Funds Added.');
                }
                else{
                    res.send('Account not found.');
                }
            }
        });
    });

    

    
}
let getUser=(request,response)=>{
    let email=request.params.email;
    UserModel.findOne({email:email},(err,result)=>{
        if(!err){
        response.json(result);
        }else{
            response.send(err);
        }
    })
    
}
let emptyCart=(request,response)=>{
    let email=request.params.email;
    CartModel.deleteMany({userId:email},(err,result)=>{
        if(!err){
            response.send("CartEmpty")
        }
        else{
            response.send("CartNotEmpty")
        }
    })
}

module.exports={signIn,
    signUp,
    addItemtoCart,
    deleteItemFromCart,
    UnlockUser,
    updateUserEmail,
    updatePassword,
    updateAddress,
    updatePhone,
    updateCartItem,
    getItemsFromCart,
    addItemtoSales,
    getAllorders,
    getOrdersOfUser,
    RaiseTicket,
    getAllTickets,
    lockUser,
    addFunds,
    getUser,
    emptyCart
};
