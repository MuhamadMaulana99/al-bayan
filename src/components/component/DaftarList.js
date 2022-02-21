
const ProductList = ({daftar, deleteDaftar}) => {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">Harga</th>
            </tr>
          </thead>
          <tbody>
          { daftar.map((daftar) => (
            <tr>
              <th scope="row">{ daftar.id }</th>
              <td>{ daftar.title }</td>
              <td>{daftar.harga}</td>
              <td>
                <a className=" m-2 btn btn-primary">Edit</a>
                <button className="btn btn-danger" onClick={() => deleteDaftar(daftar.id)}>Delete</button>
              </td>
            </tr>
            ))}
            </tbody>  
          </table>
      </div>
  );
};

export default ProductList;
