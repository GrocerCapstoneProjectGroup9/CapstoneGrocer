let UserModel=require("../user-model/user.model");
let signIn = async (request,response)=> {
    let user = request.body;    // receive the data from post method
    let userInfo = await UserModel.findOne({email:user.email,password:user.password});
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
        let result = await UserModel.insertMany(user);
        response.send("Account created successfully");
    }else {
        response.send("Email Id must be unqiue");
    }    
}
module.exports={signIn,signUp};