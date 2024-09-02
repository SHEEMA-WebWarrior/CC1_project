import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

function Login({ setPage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        alert(`Logged in as: ${email}`);
    };

    return (
        <div>
            <h2>Login</h2>
            <p>Your adventure starts here log in and let the fun begin!</p>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Login</button>
                <button onClick={() => setPage('home')}>Back to Home</button>
                <button onClick={() => setPage('register')}>Register</button>
            </form>
        </div>
    );
}

export default Login;
