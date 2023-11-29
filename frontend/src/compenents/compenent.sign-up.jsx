import React from "react";
import { useNavigate } from "react-router-dom";
import { faSignInAlt, faUserPlus, faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { useState } from "react"; // Importez useState

export function SignUpForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false); // Définissez l'état showPassword

    const handleSignUpClick = () => {
        navigate("/connexion");
    };

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSignInClick = () => {
        // Naviguer vers la page SignIn
        navigate("/connexion");
    };

    return (
        <>
            <div className="d-flex justify-content-center mb-3 mt-3">
                <div className="me-3">
                    <button
                        className="btn btn-primary"
                        style={{ background: 'white', border: '1px solid white' ,color: '#540d72'}}
                        onClick={handleSignInClick}
                    >
                        <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '8px', color:'#540d72' }} />
                        Sign In
                    </button>
                </div>
                <div>
                    <button
                        className="btn btn-outline-primary"
                        style={{ background: '#540d72', border: '1px solid white', color: 'white' }}
                    >
                        <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px', color: 'white' }} />
                        Sign Up
                    </button>
                </div>
            </div>

            <form
                id="form"
                style={{ maxWidth: '700px', margin: '0 auto', border: '2px solid #540d72', borderRadius: '10px', padding: '20px' }}
            >
                <label htmlFor="name" className="mb-2" >Nom</label>
                <input
                    id="name"
                    className='mb-4 form-control'
                    placeholder='Nom'
                    type='email'
                    name="name"
                    style={{ borderRadius: '10px', border: '1px solid #540d72' }}
                />

                <label htmlFor="email" className="mb-2">Adresse e-mail</label>
                <input
                    id="email"
                    className='mb-4 form-control'
                    placeholder='Adresse e-mail'
                    type='email'
                    name="email"
                    
                    style={{ borderRadius: '10px', border: '1px solid #540d72' }}
                />
<label htmlFor="password" className="mb-2">
    Mot de passe
</label>
<div className="input-group mb-4 position-relative">
    <input
        id="password"
        className='form-control'
        placeholder='Mot de passe'
        type={showPassword ? 'text' : 'password'}
        name="password"
        style={{ borderRadius: '10px', border: '1px solid #540d72' }}
    />
    <div className="position-absolute end-0 translate-middle-y"
        style={{ right: '10px', top: '50%' }}>
        <FontAwesomeIcon icon={showPassword ? 'eye-slash' : 'eye'} style={{ color: '#540d72' }} />
    </div>
</div>






                <label htmlFor="confirmPassword" className="mb-2" >Confirmer le mot de passe</label>
                <input
                    id="confirmPassword"
                    className='mb-4 form-control'
                    placeholder='Confirmer le mot de passe'
                    type='password'
                    name="confirmPassword"
                    style={{ borderRadius: '10px', border: '1px solid #540d72' }}
                />

                {/* Autres champs d'inscription nécessaires... */}

                <button
                    className="mb-4 btn btn-primary"
                    onClick={handleSignUpClick}
                    style={{ borderRadius: '20px', background: '#540d72', border: '1px solid #540d72' }}
                >
                    <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px', color: 'white' }} />
                    S'inscrire
                </button>

                <div className="text-center">
                <p>ou creer un compte avec :</p>

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
