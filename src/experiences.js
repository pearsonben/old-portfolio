import React from 'react';
import './experiences.css';
import swascase from './swascase.png';
import controlbox from './controlbox.png';

export default function experiences(){
    return(
        <div className="container-fluid" style={{textAlign:"center"}}>
        
            <div className="row exp-tile"> 
                <div className="col-12 align-self-center">
                    <Tile 
                        height="340px"
                        width="250px"
                        image={controlbox}
                        alt="flocking simulator"
                        height1="350px"
                        width1="680px"
                        image1={swascase}
                        alt1="flocking simulator"
                        title="Internship at Wolfson Atmospheric Chemistry Laboratories" 
                        description="A simulation of the flocking behaviours of animals, using the three principles theorised by Craig Reynolds.
                        https://www.red3d.com/cwr/boids/" 
                        stack="Java" 
                        link="https://github.com/pearsonben98/Flocking-Simulator" />
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
            height : this.props.height,
            image1 : this.props.image1,
            alt1 : this.props.alt1,
            width1 : this.props.width1,
            height1: this.props.height1
        }
    }
    render(){
        return(
            <div className="container-fluid">
                

                <div className="row project-title">
                    <div className="col-12 align-self-center">
                        <h4>{this.state.title}</h4>
                    </div>
                </div>


                <div className="row project-image1">
                    <div className="col-12 align-self-center justify-content-around">
                        <img src={this.state.image} width={this.state.width} height={this.state.height} alt={this.state.alt}></img>
                        <img src={this.state.image1} width={this.state.width1} height={this.state.height1} alt={this.state.alt1}></img>
                    </div>
                </div> 
                

                <div className="row description">
                    <div className="col-12 align-self-center">
                        <p1>{this.state.description}</p1>
                    </div>
                    
                </div>


            </div>
            
        )
    }
}
