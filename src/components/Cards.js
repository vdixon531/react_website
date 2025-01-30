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
                        src={"https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186458/puro_truck_yh29p5.jpg"}
                        text="Innovation @ Purolator's Digital Lab"
                        label="Industry Experience"
                        path="/career/purolator-digital-lab"/>
                        <CardItem 
                        src={"https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186458/plant-together_ds9moo.png"}
                        text="Contributing to Plant Together"
                        label="Passion Projects"
                        path="https://github.com/nnourr/plant-together"/>
                    </ul>

                    
                    <ul className="cards__items">
                        <CardItem 
                        src={"https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186452/dress_to_impress_ai_mknmy1.jpg"}
                        text="Building - DressToImpress.ai"
                        label="Passion Projects"
                        path="https://github.com/the-tunnster/dress-to-impress"/>
                        <CardItem 
                        src={"https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186452/ldk-1_w827sd.jpg"}
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