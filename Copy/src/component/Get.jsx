// import React from 'react';
// import axios from 'axios';
// import { useState, useEffect } from 'react';

// function Get() {
//     const [name, setName] = useState('');
//     const [job, setJob] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [isErorr, setIsErorr] = useState(false);
//     const [data, setData] = useState(null);
//     const [post, setPost] = useState({

//         completed: true
//     });

//     // const baseURL = 'https://jsonplaceholder.typicode.com/todos'
//     const url = 'https://reqres.in/api/users/2'

//     const handleSubmit = () =>{
//         setLoading(true);
//         setIsErorr(false);
//         const data = {
//             name: name,
//             job: job
//         }
//         axios.put(url, data)
//         .then(response =>{
//             setData(response.data);
//             setName('');
//             setJob('');  
//             setLoading(false);
//         }).catch(error =>{
//             setLoading(false);
//             setIsErorr(true);
//         });
//     }

//    useEffect(() => {
//        axios.get(`${baseURL}/1`)
//        .then((response)=>{
//         //    console.log(response.data)
//            setPost(response.data)
//        })
//    }, [])
//    const createPost = () =>{
//        axios.post(baseURL,{
//            id: 0,
//            title: 'maulana',
//            body: 'maulana ganteng banget'
//        }).then((result)=>{
//            setPost(result.data)
//        })
//    }

//   return (
//     <div>
//         <div>
//             <h1>Get Request</h1>
//         <h2>{post.id}</h2>
//         <h1>{post.title}</h1>
//         <h3>{post.body}</h3>
//         <button className='bg-red border-2' onClick={createPost}>post</button>
//         </div>
//         <div>
//             <h1>Put Request</h1>
//             <div className='container'>
//                 <div className="form-group">
//                     <label htmlFor="name" className='pr-1'>Nama</label>
//                     <input type="text"
//                     className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
//                     id='name'
//                     placeholder='masukan nama'
//                     value={name}
//                     onChange={e => setName(e.target.value)}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="job">pekerjaan</label>
//                     <input
//                     className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
//                      type="text"
//                      id='job'
//                      placeholder='masukan pekerjaan'
//                      value={job}
//                      onChange={e => setJob(e.target.value)}
//                       />
//                 </div>
//                 {isErorr && <small>sesuatu salah, silahkan coba lagi</small>}
//                 <div className="form-group">
//                     <button
//                     className='border-2 hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none bg-orange-300'
//                     type='submit'
//                     onClick={handleSubmit}
//                     disabled={loading}
//                     >
//                     {loading ? 'Loading...' : 'Upadate'}
//                     </button>
//                      {data && <div>
//                          <strong>Output</strong>
//                          <pre>{JSON.stringify(data, null, 2)}</pre>
//                      </div> }
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Get;