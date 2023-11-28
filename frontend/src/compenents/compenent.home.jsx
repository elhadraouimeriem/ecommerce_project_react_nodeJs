import React from "react";  // Import React if not imported already
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { Link } from "react-router-dom";

export function Home() {
    //const navigate = useNavigate();  // Corrected declaration
    //navigate("/home");

    return (
        <>
          <div className=" text-center">
            <h1>Bienvenue sur notre site</h1>
            <p>
              Découvrez notre sélection de produits de haute qualité. Trouvez ce
              que vous cherchez et profitez d'une expérience de magasinage agréable.
            </p>
    
            
            <img
  src="https://i.pinimg.com/564x/40/9b/ae/409bae6ad9e609a6b609e26d11e3b1ee.jpg"
  alt="Ordinateur vintage"
  style={{ maxWidth: '12000px', height: 'auto', border: '2px solid #540d72' }}
/>



    
            {/* Boutons avec la couleur #540d72 */}
            <div className="d-flex justify-content-center mt-4">
              <Link to="/signin" className="btn btn-primary me-3" style={{ backgroundColor: '#540d72', borderColor: '#540d72' }}>
                Se connecter
              </Link>
              <Link to="/signup" className="btn btn-outline-primary" style={{ borderColor: '#540d72', color: '#540d72' }}>
                S'inscrire
              </Link>
            </div>
          </div>
        </>
      );
    };
