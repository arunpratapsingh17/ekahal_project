import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom';
import "./Menu.css"
const Menu = () => {
    const [sidebar,setSidebar] = useState(false);
    const showSidebar =()=>setSidebar(!sidebar);
    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar?'nav-menu active':'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/aboutus">
                            About US
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/signup">
                            Signup
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu
