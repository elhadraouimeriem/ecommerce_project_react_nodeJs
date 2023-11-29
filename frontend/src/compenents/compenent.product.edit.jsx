import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductByID, updateProduct } from "../services/product.services";
import { getAllCategories } from "../services/categorie.services";

export function ProductEditForm() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [selectedCat, setSelectedCat] = useState('');
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetchProduct();
        fetchCategories();
    }, []);

    async function fetchProduct() {
        try {
            const response = await getProductByID(id);
            const p = response.data;
            setName(p.name);
            setPrice(p.price);
            setSelectedCat(p.category._id); // Set the selected category ID
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    }

    async function fetchCategories() {
        try {
            const res = await getAllCategories();
            setCategories(res.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    async function handleForm(event) {
        event.preventDefault();
        const updatedProduct = { "_id": id, "name": name, "price": price, "category": selectedCat };
        await updateProduct(updatedProduct);
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

                    <div className="mb-3">
                        <label htmlFor="categorie">Categorie</label>
                        <select value={selectedCat} onChange={(e) => setSelectedCat(e.target.value)}
                            className='form-control'
                            style={{ width: '100%', borderRadius: '10px', borderColor: '#540d72' }}
                        >
                            {categories.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ borderRadius: '20px', background: '#540d72', border: '1px solid #540d72' }}>
                        Enregistrer les modifications
                    </button>
                </form>
            </div>
        </>
    );
}
