import React from "react";
import './Electronics.css';
import { Button } from "@mui/material";
import { Card } from "@mui/material";


import Cover from '../../assests/productimgs/Covers.png';
import Moniter from '../../assests/productimgs/Moniter.png';
import Cameraaa from '../../assests/productimgs/Camera.png';
import Trimmer from '../../assests/productimgs/Trimmer.png';
import SmartTv from '../../assests/productimgs/SmartTv.png';



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
                    <img className="productimg" src={Cover} alt="covers" />
                    <div className="producttlt">Plain cases & covers</div>
                </div>
                <div>
                    <img  className="productimg" src={Moniter} alt="moniter" />
                    <div className="producttlt">Moniters</div>
                </div>
                <div>
                    <img className="productimg" src={Cameraaa} alt="camera" />
                    <div className="producttlt">Camera</div>
                </div>
                <div>
                    <img className="productimg" src={Trimmer} alt="drimmer" />
                    <div className="producttlt">Trimmer</div>
                </div>
                <div>
                    <img className="productimg" src={SmartTv} alt="smart tv" />
                    <div className="producttlt">SmartTv</div>
                </div>
                <div>
                    {/* <img className="productimg" src={} alt="ac" /> */}
                    <div className="producttlt">Ac</div>
                </div>
            </div>
        </Card>
        </>
    )
}

export default Appliances;