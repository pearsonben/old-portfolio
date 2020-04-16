import React from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import Contact from './Contact';
import Experiences from './experiences';
// for below import, run npm --save install react-router-dom in src folder
import {Route} from 'react-router-dom';




export default function App() {
  return (
    <body>
      <div className="App">
        <Navbar />
        <div className="body">
          
          <Route exact path="/" component={Home} />
          <Route exact path="/experiences" component={Experiences} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />

        </div>
        
      </div>
    </body>
    
  );
}


