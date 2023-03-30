import React from "react";
import './Header.css';

import Card from '@mui/material/Card';

// images
import Grocery from '../../assests/Grocery.png';
import Mobile from '../../assests/Mobile.png';
import Fashion from '../../assests/Fashion.png';
import Electronics from '../../assests/Electronics.png';
import Home from '../../assests/Home.png';
import Appliances from '../../assests/Appliances.png';
import Travel from '../../assests/Travel.png';
import Offer from '../../assests/Offer.png';
import Toys from '../../assests/Toys.png';
import Bike from '../../assests/Bike.png';




const Header = () => {
    return (
        <>
        <Card>
            <div className="head-cnt">
                <div className="cnt-items">
                    <a className="a-tag" href="grocery" >
                        <img className="imgs" src={Grocery} alt='grocery'></img>
                        <div className="cnt-names">Grocery</div>
                    </a>
                </div>
                <div className="cnt-items">
                    <a className="a-tag" href="mobile" >
                        <img className="imgs" src={Mobile} alt='mobile'></img>
                        <div className="cnt-names">Mobiles</div>
                    </a>
                </div>
                <div className="cnt-items">
                    <a className="a-tag" href="fashion" >
                        <img className="imgs" src={Fashion} alt='fashion'></img>
                        <div className="cnt-names">Fashion</div>
                    </a>
                </div>
                <div className="cnt-items">
                    <a className="a-tag" href="electronic" >
                        <img className="imgs" src={Electronics} alt='electronic'></img>
                        <div className="cnt-names">Electronics</div>
                    </a>
                </div>
                <div className="cnt-items">
                    <a className="a-tag" href="home" >
                        <img className="imgs" src={Home} alt='home'></img>
                        <div className="cnt-names">Home</div>
                    </a>
                </div>
                <div className="cnt-items">
                    <a className="a-tag" href="appliances" >
                        <img className="imgs" src={Appliances} alt='appliances'></img>
                        <div className="cnt-names">Appliances</div>
                    </a>
                </div>
                <div className="cnt-items">
                    <a className="a-tag" href="travel" >
                        <img className="imgs" src={Travel} alt='travel'></img>
                        <div className="cnt-names">Travel</div>
                    </a>
                </div>
                <div className="cnt-items">
                    <a className="a-tag" href="offers" >
                        <img className="imgs" src={Offer} alt='offer'></img>
                        <div className="cnt-names">Top offers</div>
                    </a>
                </div>
                <div className="cnt-items">
                    <a className="a-tag" href="toys & more" >
                        <img className="imgs" src={Toys} alt='beauty-toys'></img>
                        <div className="cnt-names">Beauty,Toys & More</div>
                    </a>
                </div>
                <div className="cnt-items">
                    <a className="a-tag" href="bikes" >
                        <img className="imgs" src={Bike} alt='bike'></img>
                        <div className="cnt-names">Two wheelers</div>
                    </a>
                </div>
            </div>
            </Card>
        </>
    )
}
export default Header;