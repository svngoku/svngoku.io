import React from "react";
import { Link } from "react-router-dom"

export default function Navbar() {
   return (
    <nav className="navbar navbar-default navbar-fixed-top">
       <div className="collapse navbar-collapse">
           
           <ul className="nav navbar-nav">
                <li className=" navbar-left">
                    <Link to="/">Home</Link>
                    <Link to="/blogs">Blogs</Link>
                </li>
            </ul>
       </div> 
    </nav>
    
   )
}