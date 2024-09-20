const mongoose= require("mongoose");


const schema= mongoose.Schema({
    work_year:{
         type: Number,
         required:true
    },
    total_jobs:Number,
    avg_salary_usd:Number,

});


const Model=mongoose.model("Aggregated",schema);

module.exports=Model;