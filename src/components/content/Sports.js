import React from "react";
import './Electronics.css';
import { Button } from "@mui/material";
import { Card } from "@mui/material";


import Mrf from '../../assests/sports/Mrf.png';
import Puma from '../../assests/sports/Puma.png';
import Nivia from '../../assests/sports/Nivia.png';
import Ceat from '../../assests/sports/Ceat.png';
import Cosco from '../../assests/sports/Cosco.png';
import Ball from '../../assests/sports/Ball.png';  



function Sports() {
    return(
        <>
        <Card className="elec-cnt">
            <div className="elec-left">
                <div style={{marginLeft : '10px'}}>Best of Sports</div>
                <Button style={{width : '100px', marginLeft : '20px'}} variant="contained">View all</Button>
            </div>
            <div className="elec-right">
                <div>
                    <img className="productimg" src={Mrf} alt="mrf" />
                    <div className="producttlt"><button className="productbtn">MRF</button></div>
                </div>
                <div>
                    <img  className="productimg" src={Puma} alt="puma" />
                    <div className="producttlt"><button className="productbtn">Puma</button></div>
                </div>
                <div>
                    <img className="productimg" src={Nivia} alt="nivia" />
                    <div className="producttlt"><button className="productbtn">Nivia</button></div>
                </div>
                <div>
                    <img className="productimg" src={Ceat} alt="Ceat" />
                    <div className="producttlt"><button className="productbtn">Ceat</button></div>
                </div>
                <div>
                    <img className="productimg" src={Cosco} alt="cosco" />
                    <div className="producttlt"><button className="productbtn">Cosco</button></div>
                </div>
                <div>
                    <img className="productimg" src={Ball} alt="ball" />
                    <div className="producttlt"><button className="productbtn">Ball</button></div>
                </div>
            </div>
        </Card>
        </>
    )
}

export default Sports;