import React, { useEffect, useState,useContext } from 'react'
import { JobContent } from '../../Context/YearContext';
// import Aggregator from '../../DataAgrregate';
import axios from 'axios';
import Dialoge from '../Dialoge/Dialoge';
import './Table.css'
import LineChart from '../LineChartModal/LineChart';

function Table() {
     const [row_Data,setRowdata]= useState([]);
    const {Fetched_Data,setFetchedData}= useContext(JobContent);
    useEffect(()=>{
        document.getElementById('my_lineGrapgh').showModal()
    },[]);
   
     const clicker= (row_data)=>{
          console.log("Row Data",row_Data);
               setRowdata(row_data);
               console.log("Row data",row_data);
      document.getElementById('my_modal_3').showModal();
     }

   console.log("Fteched Data",Fetched_Data);
  return (
    <div className='table'>
        <table className="custom-table">
      <thead>
        <tr>
          <th className='heading_block font-bold text-2xl'>Work Year</th>
          <th  className="heading_block font-bold text-2xl">Total Jobs</th>
          <th  className="heading_block font-bold text-2xl">Average Sallary</th>
          
        </tr>
      </thead>
      <tbody>
        {Fetched_Data?.map((row, _id) => (
          <tr key={_id} className='row' onClick={()=>clicker(row,_id)} >
            <td className='font-bold text-2xl' id="college_dunia_id">{row.work_year}</td>
            <td className='font-bold text-2xl'>{row.total_jobs}</td>
            <td className=' font-bold text-2xl'>{Math.round(row.avg_salary_usd)} USD</td>
          </tr>
          
        ))}
          <LineChart Table_Data={Fetched_Data}/>
           <Dialoge value={row_Data}/>
      </tbody>
   
    </table>
    </div>
  )
}

export default Table
