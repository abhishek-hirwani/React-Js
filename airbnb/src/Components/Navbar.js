import React from "react";
import bnblogo from "../image/logo.png";


export default function Navbar(){
 return(
  <nav>
   <img src={bnblogo} alt="bnb logo" className="nav-logo"  />
  </nav>
 )
}