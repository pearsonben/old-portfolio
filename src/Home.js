import React from 'react';
import './Home.css';
import pc from './pc.png';
import {Link} from 'react-router-dom';



export default function Home(){
    return(
        <div>
            <div className="home">
                <div class="container-fluid">
                    <div class="row align-items-center justify-content-around" style={{height: "100vh"}}>
                        <div class="col-5 text-col" align="center">
                                Hi, I'm <span className="highlighted-red">Ben Pearson,</span> an
                            <br></br>
                            
                            aspiring developer from Wales.
                            <br></br>
                            <br></br>
                            <span style={{fontSize: "22px"}}>
                                I began my <span className="highlighted-red">programming</span> journey 5 years ago,<br></br> where I 
                                helped develop a wireless methane alarm <br></br> system for those 
                                hard of sight and hearing.
                                
                            </span>
                        </div>
                        <div class="col-5 animation-area" align="center">
                            <br></br><br></br>
                            <img className="pixel-pc" width="200px" height="100px" src={pc} alt="ref: https://www.pixilart.com/art/laptop-0927e85a41ce5e8"></img>
                            <br></br><br></br>

                            <h2>view some of my work here</h2>
                            <br></br>
                            <button type="button" style={{padding: "0px"}} class="btn btn-outline-info"><Link to="/projects" class="nav-link">projects</Link></button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

