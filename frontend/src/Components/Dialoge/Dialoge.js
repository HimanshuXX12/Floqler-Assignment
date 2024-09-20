import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Dialoge.css'

function Dialoge(props) {
      console.log("Parops",props);
     const [ActualRowData,setRowActualData]= useState([]);
     
    useEffect(()=>{
       ParticularRow();
    },[props.value]);

     const  ParticularRow= async  ()=>{
          const responce= await axios.post(`http://localhost:300/job/${props.value.work_year}`);
          console.log("Actual data",responce);
          setRowActualData(responce.data.responce);
     }

  return (
    <div>
            <dialog id="my_modal_3" className="modal ">
        <div className="modal-box w-full max-w-screen-lg">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg text-center">Data for Year {props.value.work_year}</h3>
             <div className='mt-8'>
                            <table className="custom-table">
                    <thead>
                        <tr>
                        <th className='heading_block font-bold text-2xl'>Jobs Title</th>
                        <th  className="heading_block font-bold text-2xl">Total Jobs</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {ActualRowData?.map((row, _id) => (
                        <tr key={_id} className='row'  >
                            <td className='font-bold text-2xl' id="college_dunia_id">{row._id}</td>
                            <td className='font-bold text-2xl'>{row.count}</td>
                         
                        </tr>
                        
                        ))}
                      
                    </tbody>
                
                    </table>
             </div>
        </div>
        </dialog>
    </div>
  )
}

export default Dialoge
