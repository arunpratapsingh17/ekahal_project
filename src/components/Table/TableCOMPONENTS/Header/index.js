import React from "react";
import { useDispatch } from "react-redux";
import { toggleNavbar } from "../../Actions/layout";

const Header = ({ title = "Page Title" }) => {
    const dispatch = useDispatch();

    const toogleNavbar = () => {
        return dispatch(toggleNavbar());
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid pr-5">
                <h3>{title}</h3>
            </div>
        </nav>
    );
};

export default Header;
