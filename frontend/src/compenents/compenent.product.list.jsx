import { useEffect, useState } from "react";
import { deleteProductByID, getAllProducts } from "../services/product.services";
import { Link } from "react-router-dom";
import "../index.css";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiPencil } from 'react-icons/bi'; // Import the Bootstrap icon

export function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
      const res = await getAllProducts();
      setProducts(res.data);
  }

  async function deleteProduct(id) {
        const res = await deleteProductByID(id);
      fetchProducts();
  }

  return (
    <> 
      <h1 style={{ textTransform: 'uppercase' }}>Liste des produits</h1>

      <table className="my-table">
        <thead>
          <tr>
            <th>name</th>
            <th>Price</th>
            <th>Categorie</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category.name}</td>
              <td>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="btn btn-danger"
                >
                  <FontAwesomeIcon icon={faTrashAlt} style={{ marginRight: '8px' }} />  
                  Delete
                </button>
                <Link
                  to={`/product/edit/${product._id}`}
                  className="btn btn-warning"
                  style={{ marginLeft: '8px', color: 'white' }}
                >
                  Edit <BiPencil style={{ color: 'white', marginLeft: '4px' }} />
                </Link>   
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
      <Link
        to={"/products/new"}
        className="btn btn-success"
        style={{ marginTop: '10px', backgroundColor: '#540d72',borderRadius: '20px', border: '1px solid #540d72' }}
      >
        Nouveau produit <FontAwesomeIcon icon={faPlus} style={{redius:'20px' }} />
      </Link>
    </>
  );
}
