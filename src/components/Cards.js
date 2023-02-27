import React from "react";
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>What's been keeping me busy</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-slf.jpg"
                        text="Co-op Work Term at Sun Life Financial"
                        label="Industry Experience"
                        path="/experience"/>
                    </ul>
                    
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-9.jpg"
                        text="explore this crap"
                        label="adventure"
                        path="/music"/>
                        <CardItem 
                        src="images/img-trip.jpg"
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