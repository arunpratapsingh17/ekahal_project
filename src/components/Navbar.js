import  Menu from './Menu'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { AuthContext } from '../Authorization'
import { auth } from 'firebase'
import app from '../Firebase'

const Navbar = ({history}) => {
    const {currentUser}  = useContext(AuthContext);
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
                        {(currentUser)?(<button style={{color:"inherit"}} onClick={()=>{
                            app.auth().signOut();
                            // history.push("/")
                        }}>
                            Signout</button>):
                            (<Link to="/login">
                            Login
                           </Link>)}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
