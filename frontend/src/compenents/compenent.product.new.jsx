// ProductNew.js
import React, { useEffect, useState } from "react";
import { addProduct } from "../services/product.services";
import { useNavigate } from "react-router-dom";
import { faPlus, faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllCategories } from "../services/categorie.services";

export function ProductNew() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [selectedCat, setSelectdCat] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const res = await getAllCategories();
      setCategories(res.data);
      // Mettre à jour le state de selectedCat pour la première catégorie
      if (res.data.length > 0) {
        setSelectdCat(res.data[0].name);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  function handleForm(event) {
    event.preventDefault();

    const selectedCategory = categories.find(category => category.name === selectedCat);

    const p = { "name": name, "price": price, "category": selectedCategory };
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
        
        <div className="mb-3">
          <label htmlFor="categorie">Categorie</label>
          <select 
            onChange={(e) => setSelectdCat(e.target.value)}
            className='form-control'
            style={{ width: '100%', borderRadius: '10px', borderColor: '#540d72' }}
          >
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
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
