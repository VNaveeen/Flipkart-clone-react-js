import React from "react";
import './Electronics.css';
import { Button } from "@mui/material";
import { Card } from "@mui/material";


import Cover from '../../assests/productimgs/Covers.png';
import Moniter from '../../assests/productimgs/Moniter.png';
import Cameraaa from '../../assests/productimgs/Camera.png';
import Trimmer from '../../assests/productimgs/Trimmer.png';
import SmartTv from '../../assests/productimgs/SmartTv.png';
import Ac from '../../assests/productimgs/Ac.png';


function Electronics() {
    return(
        <>
        <Card className="elec-cnt">
            <div className="elec-left">
                <div style={{marginLeft : '10px'}}>Best of Electronics</div>
                <Button style={{width : '100px', marginLeft : '20px'}} variant="contained">View all</Button>
            </div>
            <div className="elec-right">
                <div>
                    <img className="productimg" src={Cover} alt="covers" />
                    <div className="producttlt"><button className="productbtn">Plain cases & covers</button></div>
                </div>
                <div>
                    <img  className="productimg" src={Moniter} alt="moniter" />
                    <div className="producttlt"><button className="productbtn">Moniters</button></div>
                </div>
                <div>
                    <img className="productimg" src={Cameraaa} alt="camera" />
                    <div className="producttlt"><button className="productbtn">Camera</button></div>
                </div>
                <div>
                    <img className="productimg" src={Trimmer} alt="drimmer" />
                    <div className="producttlt"><button className="productbtn">Trimmer</button></div>
                </div>
                <div>
                    <img className="productimg" src={SmartTv} alt="smart tv" />
                    <div className="producttlt"><button className="productbtn">SmartTv</button></div>
                </div>
                <div>
                    <img className="productimg" src={Ac} alt="ac" />
                    <div className="producttlt"><button className="productbtn">Ac</button></div>
                </div>
            </div>
        </Card>
        </>
    )
}

export default Electronics;