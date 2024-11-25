import {Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Logo} from "../assets/logo.jsx";
import {motion} from "framer-motion"
import {useSelector} from "react-redux";
import {selectPageTitle} from "./storeSlice.jsx";

export const NavBar = () => {
    const pageTitle = useSelector(selectPageTitle);
    return (
        <Navbar className='dark'>
            <NavbarBrand>
                <Logo/>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    {pageTitle}
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <motion.div className='d-flex' whileHover={{scale: 0.9}}
                                whileTap={{scale: 0.95}}>
                        <Button as={Link} color="primary" href="#/Cart" variant="flat"
                                style={{padding: 0, margin: 0, background: '#2D4C3A', color: 'white'}}>
                            <ShoppingCartIcon/>
                            Cart
                        </Button>
                    </motion.div>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}