import './App.css'
import React from 'react';
import plantDatabase from './assets/data';
import AppRouter from "./AppRouter.jsx";
import {NavBar} from "./componenets/NavBar.jsx";

function App() {


    const products = plantDatabase();

    console.log(products);

    return (
        <>
            <NavBar/>
            <AppRouter/>

            <footer style={{
                textAlign: 'center',
                padding: '10px',
                fontSize: '14px',
                color: '#777'
            }}>
                © {new Date().getFullYear()} Lidor Cohen. All rights reserved.<br/>
                <a href="#/terms" style={{color: '#007BFF', textDecoration: 'none'}}>Terms of Use</a> |
                <a href="#/privacy" style={{color: '#007BFF', textDecoration: 'none'}}> Privacy Policy</a>
            </footer>
        </>
    )
}

export default App
