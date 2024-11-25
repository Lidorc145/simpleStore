import GrassIcon from '@mui/icons-material/Grass';
import React from "react";
import {Link} from "@nextui-org/react";

export const Logo = () => (
    <>
        <Link href='./' color="foreground"> <GrassIcon style={{color: '#2D4C3A'}} className='mr-3'/> <p
            className="font-bold text-inherit">PARADISE</p>
        </Link>
    </>
);

