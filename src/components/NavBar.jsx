import React, {useEffect} from "react";
import { Link } from "react-router-dom"

export default function Navbar() {
    const nav = 'nav ';
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        function handleScroll() {
            document.querySelector('nav').className = 'nav scroll';
        }

        function removeScroll() {
            if(window.top) {
                return !handleScroll();
            } 
        }

        window.removeEventListener(scroll, removeScroll)
    })
   return (
    <nav className={nav + ' navbar-default'}>
       <div className="nav-container">
            <div className="brand">
                <span>🚀</span>
            </div>
           <div className="links">
                <a href> <Link to="/">Home</Link> </a> 
                <a href> <Link to="/blogs">Blogs</Link></a>
            </div>
       </div> 
    </nav>
    
   )
}