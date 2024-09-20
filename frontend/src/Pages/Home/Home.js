import React from 'react'
import './Home.css'
import Table from '../../Components/Table/Table'
import { useContext } from 'react'
import { JobContent } from '../../Context/YearContext'
function Home() {
    const {Fetched_Data,setFetchedData}= useContext(JobContent);
 
     const changehandller=(e)=>{
         const value=e.target.value;
          console.log("Value",value);
         const sorted= sortByfield(Fetched_Data,value);
         console.log("sorted",sorted);
          setFetchedData(sorted);
     }

      const sortByfield=  (data,field)=>{
             return  [...data].sort((a,b)=>{
              if(a[field]>b[field])
              {
                return -1;
              }
              if(b[field]>a[field])
              {
                return 1;
              }
              return 0;
         })
      }



    console.log("fetched data",Fetched_Data);
   
  return (
    <div className='home_page'>
        <div className='flex items-center justify-between mb-4  font-bold custom_home'>
           <h1 className='found'>Found {Fetched_Data.length} Year Data</h1>
             <div className='flex items-center gap-4 px-4'>
                    <div className='found'>Sort By</div>
                    <div className='flex items-center gap-4'>
                        <div className='' >
                            <input type='radio' name="radio" id="year" value="work_year" onChange={changehandller}/>
                            <label htmlFor='year' className='found'>Year</label>
                        </div>

                        <div  >
                            <input type='radio' name="radio" id="job" value="total_jobs" onChange={changehandller}/>
                            <label htmlFor='job' className='found'>Jobs</label>
                        </div>


                        <div >
                            <input type='radio' name="radio" id="average" value="avg_salary_usd" onChange={changehandller}/>
                            <label htmlFor='average' className='found'>Average</label>
                        </div>
                    </div>
             </div>
        </div>
       <Table/>
    </div>
  )
}

export default Home
