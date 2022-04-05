import Axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Getdua() {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const baseURL = 'https://jsonplaceholder.typicode.com/todos';
        Axios.get(baseURL)
        .then(res =>{
            console.log("datax",res.data)
            setData(res.data)
            
        })
        .catch(err => console.log(err))
        
    }, [])
    const postData = (e) =>{
        e.preventDefault();
        Axios.post('https://jsonplaceholder.typicode.com/todos',{
            title: ""

        }).then(res =>{
            console.log("data postttttt",res.data)
            
        })
        .catch(err => console.log(err))
        
    }
    const deleteData = (id, e) =>{
        e.preventDefault();
        Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>{
            console.log("data delete",res)
            
        })
        .catch(err => console.log(err))
        
    }

    const arr = data.map((data, index) =>{
        return(
            <tr className='border-2 p-5 '>
                <td className='border-2 flex justify-center'>{data.id}</td>
                <td className='border-2 pl-1'>{data.title}</td>
                <td>
                    <button className='rounded-fullpy-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                    onClick={(e)=> deleteData(data.id, e)}
                    >Hapus</button>
                </td>
            </tr>

        )
    })
  return (
    <div className=''>
        <h1>Ini get</h1>
        <form action="" className='flex align-center' >
            <label htmlFor="">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'/>
            <hr />
            <button onClick={postData} className='rounded-fullpy-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Post</button>
        </form>
        <table className='border-2 '>
            <tr className='border-2'>
                <th className='border-2'>Id</th>
                <th className='border-2'>Title</th>
                <th >Hapus</th>
            </tr>
            {arr}
    </table>
    </div>
  )
}

export default Getdua