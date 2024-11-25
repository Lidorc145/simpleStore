import React, {useEffect} from 'react';
import {HashRouter, Route, Routes, useLocation} from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import StorePage from './pages/StorePage';
import CartPage from './pages/CartPage';
import {setTitle} from "./componenets/storeSlice.jsx";
import {useDispatch} from "react-redux";

export const Pages = {
    LANDING: {title: 'Welcome', path: '/'},
    STORE: {title: 'Plants', path: '/Store'},
    CART: {title: 'Cart', path: '/Cart'},
}


const RouteChangeListener = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        const currentPage = Object.values(Pages).find(
            (page) => page.path === location.pathname
        );
        dispatch(setTitle(currentPage?.title));
    }, [location]);

    return null;
}

function AppRouter() {
    return (
        <HashRouter>
            <RouteChangeListener/>
            <Routes>
                <Route path={Pages.LANDING.path} element={<LandingPage/>}/>
                <Route path={Pages.STORE.path} element={<StorePage/>}/>
                <Route path={Pages.CART.path} element={<CartPage name={'Lidor'}/>}/>
                <Route path="/*" element={<LandingPage/>}/>
            </Routes>
        </HashRouter>
    );
}

export default AppRouter;
