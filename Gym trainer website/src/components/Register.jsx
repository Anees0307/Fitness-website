import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Register.css';

const Register = () => {
    const navigate = useNavigate();

    return (
        <div className='reg-page'>
            <div className='reg-container'>
                <h1>Register</h1>
                <form>
                    <input type='text' className='reg-input' placeholder='Username' />
                    <input type='email' className='reg-input' placeholder='E-mail' />
                    <input type='password' className='reg-input' placeholder='Password' />
                    <input type='password' className='reg-input' placeholder='Confirm Password' />
                    <button className='reg-button'>Sign Up</button>
                </form>
                <p className='login-link' onClick={() => navigate('/')}>Already have an account? Log In</p>
            </div>
        </div>
    );
}

export default Register;
