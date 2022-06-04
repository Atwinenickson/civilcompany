import React from "react"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./executive.css"
import Arnold from '../images/team/arnold.jpg';
import Jill from '../images/team/jill.jpg';
import Benja from '../images/team/benja.jpg';
import Isabel from '../images/team/isabel.jpg';
import Phil from '../images/team/phil.jpg';

const handleDragStart = (e) => e.preventDefault();

const Executive = () => {
    return (
        <div className="executive">
            <AliceCarousel mouseTracking autoPlay autoPlayInterval={1000}>
                <img src={Arnold} onDragStart={handleDragStart} role="presentation"  classname="sliderimg" alt="" />
                <img src={Jill} onDragStart={handleDragStart} role="presentation" classname="sliderimg" alt="" />
                <img src={Benja} onDragStart={handleDragStart} role="presentation" classname="sliderimg" alt="" />
                <img src={Isabel} onDragStart={handleDragStart} role="presentation" classname="sliderimg" alt="" />
                <img src={Phil} onDragStart={handleDragStart} role="presentation"  classname="sliderimg" alt="" />
            </AliceCarousel>
        </div>
    )
}

export default Executive