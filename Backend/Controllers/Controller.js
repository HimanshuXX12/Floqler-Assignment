const Actualmodel= require("../Models/Actual");
const AggregatedModel= require("../Models/Aggregigated");
// const data= require("../Data");
// const dataAgrregator=require("../DataAgrregate");


   
function Controllers(app)
{
//   app.post("/create",async (req,res)=>{
//       const responce= await Actualmodel.insertMany(data).then((data)=>{
//               res.send("Data inserted");
//       }).catch((err)=>{
//           res.send("Data not inserted");
//       });
    
//   }) 
  
//  Delet the data

//   app.post("/delete", async (req,res)=>{
//      await AggregatedModel.deleteMany({}).then(()=>{
//              res.send("DATA DELETED");
//      }).catch((err)=>{
//          res.send("Data is not deleted");
//      });
     
//   });    


//   Agregigate year wise
  app.post("/job/:year",async (req,res)=>{
        try{
 
            let  {year}= req.params;
            year=Number(year);
             
              const responce= await Actualmodel.aggregate([
                {$match:{work_year:year}},
                {$group:{_id:'$job_title',count:{$sum:1}}},
                {$sort:{count:-1}}
               ])

               res.json({responce});
             
        }catch(err){
              console.log("error",err);
        }

          

  });

  app.get("/list/job", async (req,res)=>{
     try{
        const responce= await AggregatedModel.find({});
        if(responce)
        {
          res.json({responce,sucess:true});
        }

     }catch(err)
     {
          res.json({sucess:false,err});
     }
  })   


//   app.post("/create/aggregate", async (req,res)=>{
//         await AggregatedModel.insertMany(dataAgrregator).then((data)=>{
//               res.send("DATA",data);
//         }).catch((err)=>{
//               res.send("Error",err);
//         });

//   })


    
    
}


module.exports= Controllers;