import React from "react";
import './Electronics.css';
import { Button } from "@mui/material";
import { Card } from "@mui/material";


import S21FE from '../../assests/bestdeals/S21FE.png';
import SamsungF04 from '../../assests/bestdeals/SamsungF04.png';
import Wbottles from '../../assests/bestdeals/Wbottles.png';
import VivoT1 from '../../assests/bestdeals/VivoT1.png';
import Sunglass from '../../assests/bestdeals/Sunglass.png';
import MotoG73 from '../../assests/bestdeals/MotoG73.png';


function Deals() {
    return(
        <>
        <Card className="elec-cnt">
            <div className="elec-left">
                <div style={{marginLeft : '10px'}}>Best Deals</div>
                <Button style={{width : '100px', marginLeft : '20px'}} variant="contained">View all</Button>
            </div>
            <div className="elec-right">
                <div>
                    <img className="productimg" src={S21FE} alt="S21fe" />
                    <div className="producttlt">S21FE</div>
                </div>
                <div>
                    <img  className="productimg" src={SamsungF04} alt="samsungf04" />
                    <div className="producttlt">SamsungF04</div>
                </div>
                <div>
                    <img className="productimg" src={Wbottles} alt="bottle" />
                    <div className="producttlt">Water bottles</div>
                </div>
                <div>
                    <img className="productimg" src={VivoT1} alt="vivo" />
                    <div className="producttlt">VivoT1</div>
                </div>
                <div>
                    <img className="productimg" src={Sunglass} alt="glass" />
                    <div className="producttlt">Sunglass</div>
                </div>
                <div>
                    <img className="productimg" src={MotoG73} alt="moto" />
                    <div className="producttlt">MotoG73</div>
                </div>
            </div>
        </Card>
        </>
    )
}

export default Deals;