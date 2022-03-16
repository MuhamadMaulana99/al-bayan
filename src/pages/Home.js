import axios from 'axios';
import React, { useState, useEffect} from 'react';

function Home() {

  const [data, setData] = useState

  const baseUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c499ad0d012e4010b95d76bd7bafd1be";

  
  const getApi = () =>{
    axios.get(baseUrl)
      .then((response)=>{
          console.log(response);
          setData(response.data.articles)
      })
  }
  useEffect(() =>{
    axios.post(baseUrl, data) 
      .then((response)=>{
        console.log(response);
      }).catch((err)=> console.log(err))
  },[])
  return (
    <div className='home'>
      <h1>Ini Adalah Home maulana</h1>
      <button onClick={getApi}>Ambil data Api</button>
    </div>
  )
}

export default Home;
