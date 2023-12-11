import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({children}) => {
    return(
        <header className="flex items-center px-[30px] justify-end">
            <NavLink to="/login" className="text-white text-[16px]">Login</NavLink>
        </header>
    )
}

export default Header;