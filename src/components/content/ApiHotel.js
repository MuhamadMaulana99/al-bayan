import axios from 'axios';
import React, { useState } from 'react';

function ApiHotel() {
    const [post,setPost] = useState(null)

    const baseUrl = 'http://47.254.245.112:8080/hotels';
    useEffect(() => {
        axios.get(baseUrl).then((response)=>{
            console.log(response.data);
            setPost(response.data)
        })
    },[])
    
  return <div>
      <div>
      <table>
    <thead>
        <tr>
          <th>{post.id_hotel}</th>
          <th>Judul 2</th>
          <th>Judul 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>Baris 1, Kolom 1</td>
          <td>Baris 1, Kolom 2</td>
          <td>Baris 1, Kolom 3</td>
        </tr>
        <tr>
           <td>Baris 2, Kolom 1</td>
           <td>Baris 2, Kolom 2</td>
           <td>Baris 2, Kolom 3</td>
        </tr>
    </tbody>
    </table>
      </div>

  </div>;
}

export default ApiHotel;
