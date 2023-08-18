import React from "react";
import CardItem from './CardItem';
import './Cards.css'
import slfImage from "../assets/images/img-slf.jpg"
import advImage from "../assets/images/img-trip.jpg"
import proImage from "../assets/images/img-3.jpg"

function Cards() {
    return (
        <div className='cards'>
            <h1>What's been keeping me busy</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={slfImage}
                        text="Co-op Work Term at Sun Life Financial"
                        label="Industry Experience"
                        path="/experience"/>
                    </ul>
                    
                    <ul className="cards__items">
                        <CardItem 
                        src={proImage}
                        text="Roomie Mobile App"
                        label="Side Project"
                        path="/experience"/>
                        <CardItem 
                        src={advImage}
                        text="Motorcycle Adventures"
                        label="adventure"
                        path="/youtube"/>
                    </ul>                    
                </div>
            </div>

        </div>
    )
}

export default Cards;