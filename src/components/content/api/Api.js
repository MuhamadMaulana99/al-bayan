import React from 'react'
import { useState, useEffect} from 'react'
import Card from '../Card';


function Api() {
  const [datax, setData] = useState([]);

  const fetchData = ()=>{
   fetch("http://47.254.245.112:8080/hotels")
   .then((response)=>{
      return response.json();
   }).then((data)=>{
     setData(data)
   })
  }
  useEffect(()=>{   
    fetchData();
  },[])

  return(
  <div className=''>
    <Card data={datax}/>

  </div>
  )
}


export default Api;
