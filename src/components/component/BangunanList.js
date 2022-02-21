const BangunanList = ({bangunan, deleteBangunan}) => {
    return (
      
        <div className="bg-succses">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">Harga</th>
            </tr>
          </thead>
          <tbody>
          { bangunan.map((bangunan) => (
            <tr>
              <th scope="row">{ bangunan.id }</th>
              <td>{ bangunan.title }</td>
              <td>{bangunan.harga}</td>
              <td>
                <a className="m-2 btn btn-primary">Edit</a>
                <button className="btn btn-danger" onClick={() => deleteBangunan(bangunan.id)}>Delete</button>
              </td>
            </tr>
            ))}
            </tbody>  
        </table>
        </div>
    );
};  

export  default BangunanList;