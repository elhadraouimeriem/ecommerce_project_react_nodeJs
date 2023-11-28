import { useState } from "react";
import { addProduct } from "../services/product.services";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { faPlus, faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ProductAddForm() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();  // Corrected declaration

    function handleForm(event) {
        event.preventDefault();

        const p = { "name": name, "price": price };
        console.log(p);
        addProduct(p);
        navigate("/products");  
    }

    return (
      <div className="container mt-2">
          <h1 className="text-left mb-4" style={{ textTransform: 'uppercase' }}>Ajouter nouveau produit</h1>
      
          <form onSubmit={handleForm} style={{ maxWidth: '700px', margin: '0 auto', border: '2px solid #540d72', borderRadius: '10px', padding: '20px' }}>
              <div className="mb-3">
                  <label htmlFor="name">Nom:</label>
                  <input type="text" id="name" onChange={(e) => setName(e.target.value)} className='form-control' style={{ width: '100%', borderRadius: '10px', borderColor: '#540d72' }} />
              </div>

              <div className="mb-3">
                  <label htmlFor="price">Prix</label>
                  <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className='form-control' style={{ width: '100%', borderRadius: '10px', borderColor: '#540d72' }} />
              </div>

              <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary" style={{ borderRadius: '20px', background: '#540d72', border: '1px solid #540d72' }}>
                      <FontAwesomeIcon icon={faPlus} style={{ marginRight: '8px', color: 'white' }} />
                      Ajouter à la liste
                  </button>

                  <button type="reset" className="btn btn-danger" style={{ borderRadius: '20px', background: '#540d72', border: '1px solid #540d72' }}>
                      <FontAwesomeIcon icon={faRedo} style={{ marginRight: '8px', color: 'white' }} />
                      Réinitialiser
                  </button>
              </div>
          </form>
      </div>
  );
}
