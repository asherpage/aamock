// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/login.css'
import phone from '../styles/images/2d9111c8986942157eb784b9611815fb.png'

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            if (response.data.success) {
                onLogin(response.data.user);
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error(error);
            setError('Internal server error');
        }
    };

    return (
        <div className="log-container">
    <div className="log-box">
        <div className="log-left-side">
            <img src={phone} alt="Your Image" />
        </div>
        <div className="log-right-side">
            <h2><span>A&A </span>Login Form</h2>
            <form>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input className='log-input' type="text" id="username" name="username" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input className='log-input' type="password" id="password" name="password" />
                </div>
                <div className="input-group checkbox-group">
                    <input type="checkbox" id="save-password" name="save-password" />
                    <label htmlFor="save-password">Save Password</label>
                </div>
                <button type="submit" className='log-button'>Login</button>
            </form>
        </div>
    </div>
</div>
    );
}

export default LoginForm;
