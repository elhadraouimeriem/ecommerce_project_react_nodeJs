import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { BsSend, BsArrowCounterclockwise, BsPhone, BsGeoAlt, BsEnvelope } from "react-icons/bs"; // Import Bootstrap icons

export function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic for form submission here
        navigate("/contacts");
    };

    return (
        <div className="container mt-2">
            <form id='form' onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: '0 auto', border: '2px solid #540d72', borderRadius: '10px', padding: '20px' }}>
            <h2 className="text-left mb-4" style={{ textTransform: 'uppercase' }}>Contact us</h2>
                <p className="text-center">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>

                <div className="mb-3">
                    <label htmlFor="name" >Name:</label>
                    <input type='text' id='name' className='form-control' style={{ width: '100%', borderRadius: '10px', borderColor: '#540d72'  }} />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="email" >Email address:</label>
                    <input type='text' id='email'  className='form-control' style={{ width: '100%', borderRadius: '10px', borderColor:'#540d72' }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="subject" >Subject:</label>
                    <input type='text' id='subject' className='form-control' style={{ width: '100%', borderRadius: '10px', borderColor: '#540d72'}} />
                </div>

                <div className="mb-3">
                    <label htmlFor="message">Message:</label>
                    <textarea id='message' className='form-control' style={{ width: '100%', borderRadius: '10px', borderColor: '#540d72', marginBottom: '10px', marginLeft:'10px'}} />
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="sendCopy" />
                    <label className="form-check-label" htmlFor="sendCopy">Send me a copy</label>
                </div>

                <button type="submit" className="btn btn-primary" style={{ borderRadius: '20px' }}>
                    <BsSend className="me-2" /> Send
                </button>
                <button type="reset" className="btn btn-danger ms-2" style={{ borderRadius: '20px' }}>
                    <BsArrowCounterclockwise className="me-2" /> Reset
                </button>
            </form>
            <hr style={{ margin: '20px 0' }} />
            <div className="row mb-3 mt-5">
                <div className="col-md-4 text-center">
                    <BsPhone size={30} style={{ color: 'black' }} />
                    <h5 className="mt-2">Phone</h5>
                    <p>+1 123-456-7890</p>
                </div>
                <div className="col-md-4 text-center">
                    <BsGeoAlt size={30} style={{ color: 'black' }} />
                    <h5 className="mt-2">Address</h5>
                    <p>123 Main St, Cityville</p>
                </div>
                <div className="col-md-4 text-center">
                    <BsEnvelope size={30} style={{ color: 'black' }} />
                    <h5 className="mt-2">Email</h5>
                    <p>info@example.com</p>
                </div>
            </div>


        </div>
        
    );
}
