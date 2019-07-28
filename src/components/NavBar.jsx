import React, {useEffect} from "react";
import { Link } from "react-router-dom"

export default function Navbar() {
    const nav = 'nav ';
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        function handleScroll() {
            if(window.scrollY) {
                document.querySelector('nav').className = 'nav scroll';
            } else {
                document.querySelector('nav').className = nav;
            }
        }
    })
           
   return (
    <nav className={nav + ' navbar-default'}>
       <div className="nav-container">
            <div className="brand">
            <img  alt="logo" src="https://raw.githubusercontent.com/svngoku/svngoku.io/master/public/assets/octocat.ico" width="40" height="40" />
            </div>
           <div className="links">
                <Link to="/">Home</Link> 
                <Link to="/blogs">Blogs</Link>
                <Link to="/playground">Playground</Link>
            </div>
       </div> 
    </nav>
    
   )
}