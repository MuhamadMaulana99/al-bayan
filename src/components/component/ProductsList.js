
const ProductsList = ({products, deleteProducts}) => {
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
          { products.map((products) => (
            <tr>
              <th scope="row">{ products.id }</th>
              <td>{ products.title }</td>
              <td>{products.harga}</td>
              <td>
                <a className=" m-2 btn btn-primary">Edit</a>
                <button className="btn btn-danger" onClick={() => deleteProducts(products.id)}>Delete</button>
              </td>
            </tr>
            ))}
            </tbody>  
          </table>
        </div>
    );
};  

export  default ProductsList;