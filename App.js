import React, { useState } from 'react';
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import Register from './Components/Register.js';

function App() {
    const [page, setPage] = useState('home');

    let content;
    if (page === 'home') {
        content = <Home setPage={setPage} />;
    } else if (page === 'login') {
        content = <Login setPage={setPage} />;
    } else if (page === 'register') {
        content = <Register setPage={setPage} />;
    }

    return (
        <div className="App">
            {content}
        </div>
    );
}

export default App;