import React from "react";
import { createContext } from "react";
import { useState ,useEffect} from "react";
import axios from "axios";
export const JobContent= createContext(null);


function JobContextProvider(props)
{
    const [Fetched_Data, setFetchedData]= useState([]);
    useEffect(()=>{
       fetcher();
    },[]);
 
    const fetcher= async ()=>{
     const responce= await axios.get("http://localhost:300/list/job");
     console.log(responce.data.responce);
      if(responce.data.sucess)
      {
         setFetchedData(responce.data.responce);
      }
      else
      {
        alert("failled to fetch data");
      }
     
    }
     let data={Fetched_Data,setFetchedData};
    return <JobContent.Provider value={data}>
        {props.children}
    </JobContent.Provider>
}


export default JobContextProvider;