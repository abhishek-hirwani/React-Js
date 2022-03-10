import React from "react";
import LogoImg from "../images/logo.png";
export default function Navbar(){
 return (
  <div>
   <nav>
    <img src={LogoImg} className="nav--icon" />
   <h3 className="nav--logo_text">ReactFacts</h3>
   <h4 className="nav--title">React Course - Project 1</h4>
   </nav>
   
  </div>

 )
}