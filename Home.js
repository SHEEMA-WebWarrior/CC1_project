import React from 'react';
import './Home.css';
function Home({ setPage }) {
    return (
        <div>
            <h1>Welcome to the Harsha's Toy Store</h1>
            <p>Discover amazing toys for kids of all ages!</p>
            
            <button onClick={() => setPage('login')}>Login</button>
            <button onClick={() => setPage('register')}>Register</button>
        </div>
    );
}

export default Home;