import React from 'react';

const Card=(props)=> {
    const data = props.data;
    console.log(data)

    return (
        <div className='d-flex justify-content-evenly'>
    <div className=''>
        {
            data.length !== 0 ?
            data.slice(0, 1).map((dataApi)=>(
                <div className='container-fluid'>
                    <div className="row">
                        <div className="card" style={{width: "18rem", backgroundColor: 'lightblue'}} >
                            <img src={dataApi.image } className='card-img-top' alt=""  />
                            <div className="card-body">
                                <h5 className="card-title">{dataApi.id_hotel + ' '} {dataApi.hotel_name}</h5>
                                <p className="card-text">{dataApi.hotel_description}</p>
                                <a href="" className="btn btn-info">Tekan Aku</a>
                            </div>
                        </div>
                    </div>
                </div>
            )) : <div></div>
        }
    </div>
    
    <div className='clearFix'>
        {
            data.length !== 0 ?
            data.slice(0, 2).map((dataApi)=>(
                <div className='container-fluid'>
                    <div className="row">
                        <div className="card" style={{width: "18rem", backgroundColor: 'lightblue'}} >
                            <img src={dataApi.image } className='card-img-top' alt=""  />
                            <div className="card-body">
                                <h5 className="card-title">{dataApi.id_hotel + ' '} {dataApi.hotel_name}</h5>
                                <p className="card-text">{dataApi.hotel_description}</p>
                                <a href="" className="btn btn-info">Tekan Aku</a>
                            </div>
                        </div>
                    </div>
                </div>
            )) : <div></div>
        }
    </div>
    </div>
    );
}

export default Card;