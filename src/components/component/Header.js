import React from 'react';
import List from './List';
import Tombol from './Tombol';

const Header = () => {
  return <div className='mt-3 bg-info container-fluid'>
      <h1 className='d-flex'>Daftar Latihan</h1>
      <Tombol/>
     <table className='d-flex p-2 bd-highlight' >
     <List/>
     </table>
  </div>
};

export default Header;
