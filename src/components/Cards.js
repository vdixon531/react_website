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
                        src={"images/puro_truck.jpg"}
                        text="Innovation @ Purolator's Digital Lab"
                        label="Industry Experience"
                        path="/career/purolator-digital-lab"/>
                        <CardItem 
                        src={"images/plant-together.png"}
                        text="Contributing to Plant Together"
                        label="Passion Projects"
                        path="https://github.com/nnourr/plant-together"/>
                    </ul>

                    
                    <ul className="cards__items">
                        <CardItem 
                        src={"images/dress_to_impress_ai.jpg"}
                        text="Building - DressToImpress.ai"
                        label="Passion Projects"
                        path="https://github.com/the-tunnster/dress-to-impress"/>
                        <CardItem 
                        src={"images/ldk-5.jpg"}
                        text="Escape to the Himalayas"
                        label="Adventure"
                        path="/adventure?filter=Ladakh"/>
                    </ul>    
       
                </div>
            </div>

        </div>
    )
}

export default Cards;