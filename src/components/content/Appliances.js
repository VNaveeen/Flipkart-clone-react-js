import React from "react";
import './Electronics.css';
import { Button } from "@mui/material";
import { Card } from "@mui/material";



import Fan from '../../assests/appliProducts/Fan.png';
import Kettles from '../../assests/appliProducts/Kettles.png';
import Refrige from '../../assests/appliProducts/Refrig.png';
import Speaker from '../../assests/appliProducts/Speaker.png';
import Stove from '../../assests/appliProducts/Stove.png';
import Washmachine from '../../assests/appliProducts/Washmacine.png';


function Appliances() {
    return(
        <>
        <Card className="elec-cnt">
            <div className="elec-left">
                <div style={{marginLeft : '10px'}}>Best of Appliances</div>
                <Button style={{width : '100px', marginLeft : '20px'}} variant="contained">View all</Button>
            </div>
            <div className="elec-right">
                <div>
                    <img className="productimg" src={Fan} alt="fan" />
                    <div className="producttlt">Fan</div>
                </div>
                <div>
                    <img  className="productimg" src={Kettles} alt="kettles" />
                    <div className="producttlt">Electric Kettles</div>
                </div>
                <div>
                    <img className="productimg" src={Refrige} alt="refrige" />
                    <div className="producttlt">Refrigerator</div>
                </div>
                <div>
                    <img className="productimg" src={Speaker} alt="speaker" />
                    <div className="producttlt">Speaker</div>
                </div>
                <div>
                    <img className="productimg" src={Stove} alt="stove" />
                    <div className="producttlt">Stove</div>
                </div>
                <div>
                    <img className="productimg" src={Washmachine} alt="washmachine" />
                    <div className="producttlt">Washing Machine</div>
                </div>
            </div>
        </Card>
        </>
    )
}

export default Appliances;