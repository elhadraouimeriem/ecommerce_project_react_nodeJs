import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductByID, updateProduct } from "../services/product.services";

export function ProductEditForm() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();
    const { id } = useParams(); // Utilisez 'useParams' au lieu de 'useParam'

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        const response = await getProductByID(id);
        const p = response.data;
        setName(p.name);
        setPrice(p.price);
    }

    function handleForm(event) {
        event.preventDefault();
        const updatedProduct = { "_id": id, "name": name, "price": price };
        updateProduct(updatedProduct);
        navigate("/products");
    }

    return (
        <>
            <h1 className="text-left mb-4" style={{ textTransform: 'uppercase' }}>Modifier produit</h1>

            <div className="container mt-2">
                <form onSubmit={handleForm} style={{ maxWidth: '700px', margin: '0 auto', border: '2px solid #540d72', borderRadius: '10px', padding: '20px' }}>
                    <div className="mb-3">
                        <label htmlFor="name">Nom:</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className='form-control' style={{ width: '100%', borderRadius: '10px', borderColor: '#540d72' }} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price">Prix</label>
                        <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className='form-control' style={{ width: '100%', borderRadius: '10px', borderColor: '#540d72' }} />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ borderRadius: '20px', background: '#540d72', border: '1px solid #540d72' }}>
                        Enregistrer les modifications
                    </button>
                </form>
            </div>
        </>
    );
}
