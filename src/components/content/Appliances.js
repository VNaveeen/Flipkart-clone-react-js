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
                    <div className="producttlt"><button className="productbtn">Fan</button></div>
                </div>
                <div>
                    <img  className="productimg" src={Kettles} alt="kettles" />
                    <div className="producttlt"><button className="productbtn">Electric Kettles</button></div>
                </div>
                <div>
                    <img className="productimg" src={Refrige} alt="refrige" />
                    <div className="producttlt"><button className="productbtn">Refrigerator</button></div>
                </div>
                <div>
                    <img className="productimg" src={Speaker} alt="speaker" />
                    <div className="producttlt"><button className="productbtn">Speaker</button></div>
                </div>
                <div>
                    <img className="productimg" src={Stove} alt="stove" />
                    <div className="producttlt"><button className="productbtn">Stove</button></div>
                </div>
                <div>
                    <img className="productimg" src={Washmachine} alt="washmachine" />
                    <div className="producttlt"><button className="productbtn">Washing Machine</button></div>
                </div>
            </div>
        </Card>
        </>
    )
}

export default Appliances;