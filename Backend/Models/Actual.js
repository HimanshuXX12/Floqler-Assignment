const mongoose= require("mongoose");


const schema= mongoose.Schema({
   work_year:Number,
   experince_level:Number,
   employment_type:String,
   job_title:String,
   salary:Number,
   salary_currency:String,
   salary_in_usd:Number,
   employee_residence:String,
   remote_ratio:Number,
   company_location:String,
   company_size:String

});


const Model=mongoose.model("Actual",schema);

module.exports=Model;