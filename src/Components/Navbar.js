"use client"
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react";
import './Navbar.css'
 
const Navbar = () => {
    const [ isMobile, setIsMobile ] = useState( false );

   return ( 
    <nav className="navBar">
        <div className="LogoContainer">
            <h2>LasVerde</h2>
        </div>
        <ul  className={ isMobile ? "nav-links-mobile" : "nav-links" }
        onClick={ () => setIsMobile( false ) }> 
            <Link className="NavLink" href="/"> 
                HOME 
            </Link> 
            <Link className="NavLink" href="/about"> 
                NOSOTROS 
            </Link> 
            <Link className="NavLink" href="/product"> 
                PRODUCTOS 
            </Link> 
            <Link className="NavLink" href="/contact"> 
                CONTACTO 
            </Link>
            <Link className="NavLink" href="/shoppingcard"> 
                CARRITO 
            </Link>
            <Link className="NavLink" href="/admin"> 
                ADMIN 
            </Link>
        </ul> 
        <buttom 
             className="mobile-menu-icon"     
            onClick={ ()=> setIsMobile(!isMobile)}>
            {isMobile ?<FaTimes/> : <FaBars />}
        </buttom>
    </nav> 
  ); 
}; 
export default Navbar; 
 