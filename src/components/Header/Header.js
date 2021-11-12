import React from 'react';
import { NavLink } from 'react-router-dom';


import "./Header.css";

const Header = () => {
    const activeStyle = {
        color: "white",
        padding: '5px ',
        backgroundColor: "goldenrod",
        borderRadius:'3px'
    };




    return (
        <div className= " " >
           
            <div className="container-fluid navbar-color ">
                <nav className="navbar navbar-expand-lg navbar-dark " >
                    <div className="container-fluid">
                        <img className = "bg-white border rounded" src="./sitelogo.png" alt="..." width="150px" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >


                                <li className="nav-item ">
                                    <NavLink activeStyle={activeStyle} className=" nav-items-style nav-items-style " to="/home"> Home</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className=" nav-items-style" to="/allServices"> Tours</NavLink>
                                </li>


                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className=" nav-items-style" to="/about"> About</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className=" nav-items-style" to="/contact"> Contact</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className=" nav-items-style" to="/addServices"> Add New Service</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className=" nav-items-style" to="/login">Log In</NavLink>
                                </li>




                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;