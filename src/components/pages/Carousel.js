import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Flight1 from '../../assests/Flight1.png';
import Flight2 from '../../assests/Flights2.png';
import Flight3 from '../../assests/Flights3.png';
import Flight4 from '../../assests/Flights4.png';
import './Carousel.css';
// import { Carousel } from 'react-bootstrap';

function Carousels() {
    return (
        <div style={{display : 'block' , width : '100%' ,marginTop: "10px"}}>
            <Carousel className='crs'>
                <Carousel.Item interval={3000}>
                    <img
                        className="slide-img1"
                        src={Flight1}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img
                        className="slide-img2"
                        src={Flight2}
                        alt="Second slide"
                    />      
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img className='slide-img3'
                    src={Flight4}
                    alt = 'third slide'
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="slide-img4"
                        src={Flight3}
                        alt="fourth slide"
                    />
                 
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carousels;