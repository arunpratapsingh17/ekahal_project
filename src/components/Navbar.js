import  Menu from './Menu'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <header >
            <nav className="nav">
              <Menu className="menu" />
                <div className="navbar_list">
                    <div className="navbar_individual">
                       <Link to="/">
                            Home
                       </Link>
                    </div>
                    <div className="navbar_individual">
                       <Link to="/dashboard">
                            Dashboard
                       </Link>
                    </div>
                    <div className="navbar_individual">
                        <Link to="/aboutus">
                                About US
                        </Link>
                    </div>
                    <div className="navbar_individual">
                        <Link to="/auth">
                            Sigup
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
