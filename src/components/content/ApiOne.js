import React, { useState, useEffect} from 'react';
import axios from 'axios';

function ApiOne() {

  const [data, setData] = useState([])
  const [post, setPost] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [urlToImage, setUrlToImage] = useState('')
  const baseUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c499ad0d012e4010b95d76bd7bafd1be";
  
  const getApi = () =>{
    axios.get(baseUrl)
      .then((response)=>{
          console.log(response);
          setData(response.data.articles)
      })
  }
  
  const createPost = () =>{
    axios.post(baseUrl,{
      title: '',
      description: ''
    }).then((result) =>{
      setPost(result.data)
    })
  }
  useEffect(() =>{
    axios.post(baseUrl, data) 
      .then((response)=>{
        console.log(response);
      }).catch((err)=> console.log(err))
  },[])
  const postData = (e) =>{
    e.preventDefault();
  }


  return (
  <div className='dataApi'>
    <div>
      <h1>Post Data</h1>
      <form className='d-flex align-items-beetwen' method='post'>
      <label>Tambah Title</label>
      <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
      <label>Tambah Dekripsi</label>
      <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)}/>
      <label>Tambah Gambar</label>
      <input type="file" value={urlToImage} onChange={(e) => setUrlToImage(e.tager.value)}/>
      <button className='btn btn-primary' onClick={postData}>Tambah Data</button>
      </form>
    </div>
    <div className=''>
        <h1>Ini DataApi</h1>
        <button className='btn btn-info' onClick={getApi}>Ambil Api</button>
    </div>
    <div className='container'>
      <div className='row'>
        {
          data.map((value)=>{
            return (
              <div className='col-3'>
                <div className="card" style={{width: "18rem"}}>
                  <img src={value.urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href={value.url} className="btn btn-primary">Berita Terbaru</a>
                    </div>
                </div>
              </div>
            )
          })
          }
        </div>
        </div>
      </div>
  );
}


export default ApiOne;
