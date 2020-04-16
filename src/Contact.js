import React from 'react';
import './Contact.css';
import linkedin from './linkedin.png';
import github from './github.png';

export default function Contact(){
    return(
        <div className="container-fluid contact">
            <div className="row justify-content-center align-items-center" style={{backgroundColor:"rgb(6, 0, 40)"}}>

                <div className="col-12 align-self-center">
                    <h3> you can contact me via email at  <br></br>
                        <span className="highlighted-red"> pearsonben98@gmail.com </span>
                        <br></br><br></br><br></br>
                        you can call or leave a text message at <br></br>
                        <span className="highlighted-red"> 07760881780 </span>
                    </h3>
                </div>
            
            
                <div className="col-12 align-self-center">
                    <h5>
                        or alternatively, you can add me on LinkedIn or GitHub.
                    </h5>
                    <br></br>
                </div>
                <div className="col-3 space-evenly">
                    <a href="https://www.linkedin.com/in/pearsonben98/" target="_blank"><img src={linkedin} width="200px" alt="linkedin-logo"></img></a>
                </div>
                <div className="col-3 space-evenly">
                <a href="https://github.com/pearsonben98" target="_blank"><img src={github} width="150px" alt="github-logo"></img></a>
                </div>

            </div>
            
        </div>
    )
}