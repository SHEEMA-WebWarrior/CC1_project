import React, { useState } from 'react';
import './Register.css'; // Import the CSS file

function Register({ setPage }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            // Handle registration logic here
            alert(`Registered with email: ${email}`);
        } else {
            alert('Passwords do not match!');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <p>Welcome to a world of fun! Register now to start your adventure.</p>
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label>Name:
                    <input
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    /></label>
                </div>
                <div>
                    <label>Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /></label>
                </div>
                <div>
                    <label>Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /></label>
                </div>
                <div>
                    <label>Confirm Password:
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    </label>
                </div>
                <div> <label>Address:<input type="address" value={address} onChange={(e) => setAddress(e.target.value)} required /></label></div>
                <button type="submit">Register</button>
                <button type="button" onClick={() => setPage('home')}>Back to Home</button>
        
            </form>
        </div>
    );
}

export default Register;
