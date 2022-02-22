
const DataList = ({data, deleteData}) => {
    return (
        <div className="d-inline p-2 ">
                  <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">Harga</th>
            </tr>
          </thead>
          <tbody>
          { data.map((data) => (
            <tr>
              <th scope="row">{ data.id }</th>
              <td>{ data.title }</td>
              <td>{data.harga}</td>
              <td>
                <a className=" m-2 btn btn-primary">Edit</a>
                <button className="btn btn-danger" onClick={() => deleteData(data.id)}>Delete</button>
              </td>
            </tr>
            ))}
            </tbody>  
          </table>
        </div>
    );
};  

export default DataList;