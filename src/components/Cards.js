import React from "react";
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Epic destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-9.jpg"
                        text="explore this crap"
                        label="adventure"
                        path="/music"/>
                        <CardItem 
                        src="images/img-2.jpg"
                        text="explore this crap"
                        label="adventure"
                        path=""/>
                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-3.jpg"
                        text="explore this crap"
                        label="adventure"
                        path=""/>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards;