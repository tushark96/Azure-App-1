import React, {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App () {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch('/api/hello')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    },[])
    return (
        <div className="App">
        <header className="App-header">
        <h1 className="App-title">{message}</h1>
        </header>
    </div>
)
}

export default App;
