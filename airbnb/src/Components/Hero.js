import React from "react";
import collageimg from "../image/collage.JPG"

export default function Hero(){
return (
 <section className="hero">
  <img src={collageimg} alt="grid image" className="hero--photo" />
  <h1 className="hero--header">Online Exprience</h1>
  <p className="hero--text">Join Unique interactive acitivities led by
   one-of-a-kind hosts-all without leaving home.</p>
 </section>
)
}