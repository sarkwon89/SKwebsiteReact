import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
        <div>
        <nav>
            <div class="nav-wrapper">
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="left hide-on-med-and-down">
                    <li><a href="#aboutmesection">ABOUT ME</a></li>
                    <li><a href="#productsection">PRODUCTS</a></li>
                    <li><a href="#projectsection">PROJECTS</a></li>
                    <li><a href="#commericalsection">COMMERCIALS</a></li>
                </ul>
            </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
            <li><a href="#aboutmesection">ABOUT ME</a></li>
            <li><a href="#productsection">PRODUCTS</a></li>
            <li><a href="#projectsection">PROJECTS</a></li>
            <li><a href="#commericalsection">COMMERCIALS</a></li>
        </ul>
        </div>
        
      );

}

export default Navbar;



