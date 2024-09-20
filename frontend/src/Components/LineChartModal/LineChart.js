import React from 'react'
import './LineChart.css'
import { Line ,Bar} from 'react-chartjs-2';
import {
  Chart as ChartJS,
} from 'chart.js/auto';



function LineChart(props) {
  console.log("Line Props",props.Table_Data);
     const chartdata={
         labels:props.Table_Data.map((item)=>item.work_year),
         datasets:[
           {
              label:"No of Jobs",
              data:props.Table_Data?.map((item)=>item.total_jobs),
              fill: false, 
              borderColor: 'rgba(75,192,192,1)', 
              backgroundColor: 'rgba(75,192,192,0.2)', 
              tension: 0.1,

           }
         ]
     }
      
     
     const options = {
          responsive: true,
          scales: {
                  x: {
                      title: {
                          display: true,
                          text: 'Years',
                      },
                      ticks:{
                        autoSkip: false,
                        
                      }
                  },
                  y: {
                      title: {
                          display: true,
                          text: 'Number of Jobs', // Label for Y-axis
                      },
                      beginAtZero: true, // Start Y-axis from zero
                  },
          },
          plugins: {
              legend: {
                  display: true,
                  position: 'top',
              },
              title:{
                display:true,
                text:"Line Grapgh"

              }
          },
  };

  return (
    <div>
        <dialog id="my_lineGrapgh" className="modal">
                  <div className="modal-box  w-full ">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='flex justify-center '>
                        <Line data={chartdata} options={options} className='lineer'/>
                        {/* <Bar data={dummychartdata} /> */}
                    </div>
                  </div>

        </dialog>
      
    </div>
  )
}

export default LineChart
