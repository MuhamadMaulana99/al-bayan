import { useState, useEffect } from 'react';
import DataList from './DataList';
import DaftarList from './DaftarList';
import ProductList from './ProductsList';
import BangunanList from './BangunanList';

function List() {
    const [products, setProducts] = useState([
        {id: 1, title: 'Ayam 1', harga: 1000 },
        {id: 2, title: 'Terong 2', harga: 2000 },
        {id: 3, title: 'Tempe 3', harga: 3000 },
        {id: 4, title: 'Tahu 4', harga: 4000 }
    ]);
    const [daftar, setDaftar] = useState([
        {id: 1, title: 'Teh Jus 1', harga: 9000 },
        {id: 2, title: 'Nutrisari 2', harga: 5000 },
        {id: 3, title: 'Es Kelapa 3', harga: 3000 },
        {id: 4, title: 'Coco Melon 4', harga: 10000 }
    ]);
    const [bangunan, setBangunan] = useState([
        {id: 1, title: 'Batu Bata', harga: 1010 },
        {id: 2, title: 'Pasir', harga: 2020 },
        {id: 3, title: 'Semen', harga: 3030 },
        {id: 4, title: 'Paralon', harga: 4040 }
    ]);
    const [data, setData] = useState([
        {id: 1, title: 'Muhamad Maulana', harga: 100000 },
        {id: 2, title: 'Anggi', harga: 2000 },
        {id: 3, title: 'Zayadi', harga: 4000 },
        {id: 4, title: 'Mifta', harga: 6000 }
    ]);
    const deleteDaftar = (daftarId) =>{
        const newDaftar = daftar.filter(daftar => daftar.id !== daftarId );
        setDaftar(newDaftar);
    }
    const deleteData = (dataId) => {
        const newData = data.filter(data => data.id !== dataId );
        setData(newData);
    }
    const deleteProducts = (productsId) =>{
        const newProducts = products.filter(products => products.id !== productsId);
        setProducts(newProducts);
    }
    const deleteBangunan = (bangunanId) => {
        const newBangunan = bangunan.filter(bangunan => bangunan.id !== bangunanId );
        setBangunan(newBangunan);
    }

  return(
    <div className='container-fluid bg-info d-flex justify-content-around'>
        <DaftarList daftar={daftar} deleteDaftar={deleteDaftar}/>
        <ProductList products={products} deleteProducts={deleteProducts}/>
        <BangunanList bangunan={bangunan} deleteBangunan={deleteBangunan}/>
        <DataList data={data} deleteData={deleteData}/>
    </div>
  )
}

export default List;
