import React from 'react';
import plantDatabase from "../assets/data.jsx";
import {Container} from "@mui/material";
import CategoryTile from "../componenets/categoryTile.jsx";


const StorePage = () => {
    const plantsCatalog = plantDatabase();
    const categories = [...new Set(plantsCatalog.map((item) => item.category))];

    return (<div className="store-container">
        <Container style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {categories.map((category, categoryKey) => {
                return (
                    <CategoryTile {...{plantsCatalog, category, categoryKey}} />

                );
            })}
        </Container>
    </div>)
        ;
}

export default StorePage;
