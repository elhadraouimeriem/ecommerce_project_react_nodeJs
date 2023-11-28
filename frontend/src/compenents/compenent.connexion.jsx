import React from "react";
import { useNavigate } from "react-router-dom";
import { faSignInAlt, faUserPlus, faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ConnexionForm() {
    const navigate = useNavigate();
    const handleSignUpClick = () => {
        // Naviguer vers la page SignUp.js
        navigate("/sign-up");    };

    return (
        <>
        <div className="d-flex justify-content-center mb-3 mt-3">
  <div className="me-3">
    <button
      className="btn btn-primary"
      style={{  background: '#540d72', border: '1px solid #540d72' }}
      >
      <FontAwesomeIcon icon={faSignIn} style={{ marginRight: '8px', color: 'white' }} />
      Sign In
    </button>
  </div>
  <div>
  <button
  className="btn btn-outline-primary"
  style={{ background: 'white', border: '1px solid #540d72', color: '#540d72' }}       onClick={handleSignUpClick}

>
  <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px', color: '#540d72' }} />
  Sign Up
</button>

  </div>
</div>

        <form id='form'  style={{ maxWidth: '700px', margin: '0 auto', border: '2px solid #540d72', borderRadius: '10px', padding: '20px' }}>
        
            <label htmlFor="email" className="mb-2" >Adresse e-mail</label>
            <input id="email" className='mb-4 form-control' placeholder='Adresse e-mail' type='email' style={{ borderRadius: '10px', border: '1px solid #540d72' }} />

            <label htmlFor="password" className="mb-2" >Mot de passe</label>
            <input id="password" className='mb-4 form-control' placeholder='Mot de passe' type='password' style={{ borderRadius: '10px', border: '1px solid #540d72' }} />

            <div className="d-flex justify-content-between mx-3 mb-4">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ marginRight: '5px' }} />
                    <label className="form-check-label" htmlFor="flexCheckDefault" style={{ marginRight: '15px', color: '#540d72' }}>
                        Se souvenir de moi
                    </label>
                </div>
                <a href="!#" style={{ color: '#540d72' }}>Mot de passe oublié ?</a>
            </div>

            <button className="mb-4 btn btn-primary" onClick={() => navigate("/connexion")} style={{ borderRadius: '20px', background: '#540d72', border: '1px solid #540d72' }}>
                <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '8px', color: 'white' }} />
                Se connecter
            </button>

            <div className="text-center">
                <p>Vous n'avez pas de compte ? <span style={{ cursor: 'pointer', textDecoration: 'underline', color: '#540d72' }}>S'inscrire</span></p>
                <p>ou connectez-vous avec :</p>

                <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                    <button className='m-1 btn' style={{ color: '#540d72' }}>
                        <FontAwesomeIcon icon={faFacebook} size="sm" />
                    </button>

                    <button className='m-1 btn' style={{ color: '#540d72' }}>
                        <FontAwesomeIcon icon={faTwitter} size="sm" />
                    </button>

                    <button className='m-1 btn' style={{ color: '#540d72' }}>
                        <FontAwesomeIcon icon={faGoogle} size="sm" />
                    </button>

                    <button className='m-1 btn' style={{ color: '#540d72' }}>
                        <FontAwesomeIcon icon={faGithub} size="sm" />
                    </button>
                </div>
            </div>
        </form>
        </>
        
    );
}
