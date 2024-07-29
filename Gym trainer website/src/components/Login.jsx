import React, { useState } from 'react';
import '../components/Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple validation
        if (username.trim() === '' || password.trim() === '') {
            setErrorMessage('Both fields are required.');
        } else {
            setErrorMessage('');
            // Perform login action (e.g., authentication check)
            navigate('/'); // Redirect to the home page
        }
    };

    return (
        <div className='login-page'>
            <div className='login-container'>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type='text'
                        className='login-input'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type='password'
                        className='login-input'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}
                    <button type='submit' className='login-button'>
                        Log In
                    </button>
                    <p className='signup-link'>
                        <Link to={'/register'}>Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
