import {Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { favorite1context } from "./App";
import './Navbar.css';
function Navbar() {
    const {countFav}=useContext(favorite1context);
    return( 
     <div>
        <div id="navbardiv">
            <div id="divoflogo"><img id="imgLogo" src="https://graphicsfamily.com/wp-content/uploads/edd/2020/04/house-apartment-logo-green-Transparent-1.png" alt="pic"></img></div>
            <div className="object-nav"><Link to={"/"} className="linktopages"> Buy/Rent</Link></div>
            <div className="object-nav"><Link to={"/Advertise"} className="linktopages"> Advertise</Link></div>
            <div className="object-nav"><Link to={"/about"} className="linktopages"> About</Link></div>
            <div className="object-nav"><Link to={"/Contactus"}  className="linktopages"> Contact us</Link></div>
            <div className="object-nav" ><Link to={"/Favorite"} id="navbar-fav"  className="linktopages"> My favorite <span id="fav-count">{countFav}</span></Link></div>          
        </div>
        <div id="placeforfixedposition"></div>
        <Outlet/>
    </div>
    )
 }
 export default Navbar;