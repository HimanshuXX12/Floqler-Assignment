const express= require("express");
const mongoose= require("mongoose");
const app= express();
const cors= require("cors");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));
const env= require("dotenv").config();
const port= process.env.PORT || 300;
const password=process.env.PASSWORD;
const Controllers= require("./Controllers/Controller");
Controllers(app);
const db_link=`mongodb+srv://himanshuee20a1358:${password}@cluster0.ukdr2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(db_link).then(()=>{
     console.log("Database is connected");
}).catch((err)=>{
     console.log("Databse is not connected");
})
app.listen(port,()=>{
     console.log("Server is running at port ",port);
})