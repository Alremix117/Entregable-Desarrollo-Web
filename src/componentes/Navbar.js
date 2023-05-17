import React, { useState } from 'react'
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs"
import { HiOutlineBars3 } from "react-icons/hi2"

/*import {
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";*/

import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
        },
        {
            text: "Acerca",
            icon: <InfoIcon />,
        },
        {
            text: "Testimonios",
            icon: <CommentRoundedIcon />,
        },
        {
            text: "Contacto",
            icon: <PhoneRoundedIcon />,
        },
        {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon />,
        }

    ]
    return (
        <nav>
            <div className='nav-logo-container'>
                <img src={Logo} alt="" />
            </div>
            <div className='navbar-links-container'>
                <a href=''>HOME</a>
                <a href='Acerca'>ACERCA</a>
                <a href=''>TESTIMONIOS</a>
                <a href=''>CONTACTO</a>
                <a href=''>
                    <BsCart2 className="navbar-cart-icon" />
                </a>
                <button className='primary-button'>Reserva ya</button>
                <div className='navbar-menu-container'>
                    <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
                </div>

            </div>


        </nav>
    )
}

export default Navbar