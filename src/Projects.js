import React from 'react';
import './projects.css';
import {Button} from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import boids from './boids.png';
import tictactoe from './tictactoe.png';
import fingertap from './fingertap.png';
import calculator from './calculator.png';
import routeplan from './routeplan.png';
import shortestpath from './shortestpath.png';


export default function Projects(){
    return(
        <div className="container-fluid" style={{textAlign:"center"}}>


            <div className="row" style={{backgroundColor:"rgb(6, 0, 40)"}}>

                <div className="col-12 align-self-center">
                    <h3><span className="highlighted-green">{"<p1>"}</span>below you can find some of the projects i've worked on<span className="highlighted-green">{"<p1>"}</span></h3>
                </div>
            </div>


            <div className="row" style={{backgroundColor:"rgb(255, 77, 77)"}}>

                <div className="col-12 align-self-center">
                    <Tile 
                        height="400px"
                        width="800px"
                        image={boids}
                        alt="flocking simulator"
                        title="animal flocking simulator" 
                        description="A simulation of the flocking behaviours of animals, using the three principles theorised by Craig Reynolds.
                        https://www.red3d.com/cwr/boids/" 
                        stack="Java" 
                        link="https://github.com/pearsonben98/Flocking-Simulator" />
                </div>
            </div>


            <div className="row" style={{backgroundColor:"rgb(103,152,149)"}}>
                <div className="col-12 align-self-center">
                    <Tile 
                        height="400px"
                        width="600px"
                        image={tictactoe}
                        alt="tic-tac-toe"
                        title="noughts and crosses" 
                        description="implementation of noughts and crosses using react.js" 
                        stack="javascript/react.js" 
                        link="https://github.com/pearsonben98/tic-tac-toe" />
                </div>
            </div>

            
            <div className="row" style={{backgroundColor:"rgb(49,53,91)"}}>
                <div className="col-12 align-self-center">
                    <Tile 
                        height="400px"
                        width="800px"
                        image={fingertap}
                        alt="tic-tac-toe"
                        title="MDS UPDRS test analysis (unified parkinson's disease rating scale)" 
                        description="analysing MDS UPDRS test to try and evaluate movement differences between human
                        parkinson's patients, and non-parkinson's patients." 
                        stack="MATLAB" 
                        link="https://github.com/pearsonben98/Finger-Tapping-Data-Model" />
                </div>
            </div>


            <div className="row" style={{backgroundColor:"rgb(33,54,75)"}}>
                <div className="col-12 align-self-center">
                    <Tile 
                        height="400px"
                        width="400px"
                        image={calculator}
                        alt="java-calculator"
                        title="java calculator" 
                        description="a calculator created in Java using Swing components" 
                        stack="Java" 
                        link="https://github.com/pearsonben98/JavaCalculator" />
                </div>
            </div>


            <div className="row" style={{backgroundColor:"rgb(248,198,135)"}}>
                <div className="col-12 align-self-center">
                    <Tile 
                        height="400px"
                        width="600px"
                        image={routeplan}
                        alt="travel planner"
                        title="travel planner" 
                        description="(in progress) journey planner using the google maps API with react.js" 
                        stack="javascript/react.js" 
                        link="https://github.com/pearsonben98/route-planner" />
                </div>
            </div>


            <div className="row" style={{backgroundColor:"rgb(125, 204, 147)"}}>
                <div className="col-12 align-self-center">
                    <Tile 
                        height="400px"
                        width="750px"
                        image={shortestpath}
                        alt="shortest path"
                        title="shortest route calculator" 
                        description="implementation of dijkstra's algorithm in C, using object-oriented programming concepts" 
                        stack="C" 
                        link="https://github.com/pearsonben98/ShortestPath" />
                </div>
            </div>



        </div>
    )
}


class Tile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image : this.props.image,
            alt : this.props.alt,
            title : this.props.title,
            description : this.props.description,
            stack : this.props.stack,
            link : this.props.link,
            width : this.props.width,
            height : this.props.height
        }
    }

    render(){
        return(
            <div className="tile">

                <div className="project-title">
                    <h4>{this.state.title}</h4>
                </div>

                <div className="project-image">
                    <img src={this.state.image} width={this.state.width} height={this.state.height} alt={this.state.alt}></img>
                </div> 

                <div className="description">
                    <p1>{this.state.description}</p1>
                </div>

                <div className="link">
                    <a href={this.state.link} rel="noopener noreferrer" target="_blank"><button type="button" class="btn btn-primary">view on GITHUB</button></a>
                </div>

            </div>
            
        )
    }
}





