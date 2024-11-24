import './App.css'

import {AppBar, Container, Toolbar, Typography} from "@mui/material";
import {Counter} from "./componenets/Counter.jsx";


function App() {
    const Pages = {
        LANDING: 'Landing',
        STORE: 'Store',
        CART: 'Cart',
        PRODUCT: 'Product'
    }

    return (
        <>
            <AppBar position="static" color="default">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Store
                        </Typography>

                    </Toolbar>
                </Container>
            </AppBar>
            <Counter/>
        </>
    )
}

export default App
