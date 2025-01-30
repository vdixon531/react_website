import React  from "react";
import '../App.css';
import { Button } from "./Button";
import './HeroSection.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import pdf from "../assets/files/resume.pdf";


function HeroSection(){
    
    return (
        <div className="hero-container">
            <video src={"https://res.cloudinary.com/dgpp4gcw5/video/upload/v1738187023/video-1_pm7pi4.mp4"} autoPlay playsInline loop muted preload="auto" />
            <h1>Hello!</h1>
            <p>Welcome to my corner of the internet :)</p>
            <div className="hero-btns">
                <Button className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                path='/'
                onclick={window.scrollTo({top:window.innerHeight, behavior:'smooth'})}>
                    GET STARTED
                </Button>                     
                <Button className='btns' 
                        buttonStyle='btn--primary' 
                        buttonSize='btn--large'
                        path={pdf}
                        target="_blank"
                        style={{ "border-radius": "10px" }}>
                    MY RESUME
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;