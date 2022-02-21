import React from 'react';
import { useState } from 'react';

function Tombol() {
    const [title, setTitle] = useState('Muhamad Maulana');
    const [Age, setAge] = useState(40);
  
    const changeTitle  = () => {
      setTitle('Maulana Muhamad');
      setAge(50);
    }
    return (
      <div className="Container-fluid">
        <h1 className=''>Nama : {title}</h1>
        <h1>Umur : { Age }</h1>
        <button className="m-2 btn btn-outline-Primary" onClick={ changeTitle }>Ubah Nama </button>
        </div>   
    );
  }
export default Tombol;

