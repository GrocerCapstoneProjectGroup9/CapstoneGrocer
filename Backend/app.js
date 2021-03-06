let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let userRouter=require("./User/user-router/user.router");
let employeeRouter = require("./Employees/employee.router")
let adminRouter=require("./Admin/router/admin.router")
let productRouter=require("./Products/router/product.router")
//const autoIncrement=require("mongoose-sequence")(mongoose);
let app=express();

app.use(cors());

app.use(bodyParser.json())

let url = "mongodb://localhost:27017/ProjectTest"
mongoose.connect(url).
then(res=>console.log("connected")).
    catch(error=>console.log(error));

app.use("/api/user",userRouter);

app.use("/api/employee", employeeRouter);
app.use("/api/admin",adminRouter);
app.use("/api/product",productRouter)
app.listen(9090,()=>console.log("Server running on port number 9090"))