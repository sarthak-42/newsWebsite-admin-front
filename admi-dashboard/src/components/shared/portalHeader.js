import React, { useState } from "react";
import ImageIcons from "../imageComponent/ImageIcons";
import UserProfile from '../dashboard/userProfile';
import { Link } from "react-router-dom";
// import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedIcon from '@mui/icons-material/Feed';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LogoutIcon from '@mui/icons-material/Logout';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// import SettingsIcon from '@mui/icons-material/Settings';
import CategoryIcon from '@mui/icons-material/Category';
import MenuIcon from '@mui/icons-material/Menu';

const PortalHeader = ({ children }) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(current => !current);
    };
    return (
        <div className='dashboard'>
            <div className={isActive ? 'is_active dashboard_left' : 'dashboard_left'}>
                <div className='dashboard_left_content'>
                    <Link className='logo' href='#' alt="logo">
                        <img className='large_logo' src={ImageIcons.site_logo} alt="fullLogo" />
                        <img className='small_logo' src={ImageIcons.site_logo} alt="logo" />
                    </Link>

                    <div className='dashboard_bar'>
                        <div className='nav'>
                            <ul>
                                {sideBarLinks.map((link, index) => (
                                    <li key={index}><Link to={link.handle}>{link.icon}<span className="linkText">{link.title}</span></Link></li>
                                ))}
                            </ul>
                        </div>
                        <Link className='log-out' href='/' alt="logout">
                            <LogoutIcon />
                            <span className='linkText'>Log Out</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={isActive ? "dashboard_right is_active" : "dashboard_right"}>
                <div className='header'>
                    <div className='header_left'>
                        <div className='header_toogle' onClick={handleClick}>
                            <span className="menu_opne">
                                <MenuOpenIcon />
                            </span>
                            <span className="menu_close">
                                <MenuIcon />
                            </span>


                        </div>
                    </div>
                    <div className='header_right'>
                        <UserProfile />
                    </div>
                </div>
                <div className="p-[30px] mt-[70px]">
                    {children}
                </div>
            </div>
        </div>
    )
}

const sideBarLinks = [
    {
        icon: <NewspaperIcon/>,
        title: "Add-News",
        handle: "/dashboard",
    },
    {
        icon: <FeedIcon/>,
        title: "Featured",
        handle: "/featured",
    },
    {
        icon: <CategoryIcon />,
        title: "Categories",
        handle: "/categories",
    },
    // {
    //     icon: <SettingsIcon />,
    //     title: "Settings",
    //     handle: "/settings",
    // }
]

export default PortalHeader;