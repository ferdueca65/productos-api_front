import React from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'

function Navbar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/home" className="navbar-brand">
                <img height="50" width="50" src={logo} alt="Logo react js"/>
                &nbsp;&nbsp;
                <strong>Home</strong>
            </Link>
            <Link to="/productos" className="btn btn-info mr-3">
                Productos
            </Link>
            <Link to="#" className="btn btn-info">
                Usuarios
            </Link>
        </nav>
    )
}
export default Navbar