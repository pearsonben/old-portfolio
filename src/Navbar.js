import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';


export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark blackground">
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to="/" class="nav-link">home<span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/projects" class="nav-link">projects<span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/contact" class="nav-link">contact<span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/experiences" class="nav-link">experiences<span class="sr-only">(current)</span></Link>
                    </li>
                    
                </ul>
                <span class="navbar-brand">
                ben pearson
                </span>
            </div>
        </nav>
    )
}