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
        </>
    )
}

export default App
