import React from "react";
import './Electronics.css';
import { Button } from "@mui/material";

import Cover from '../../assests/productimgs/Covers.png';
import Moniter from '../../assests/productimgs/Moniter.png';

function Electronics() {
    return(
        <>
        <div className="elec-cnt">
            <div className="elec-left">
                <h5 style={{marginLeft : '10px'}}>Best of electronics</h5>
                <Button style={{width : '100px', marginLeft : '20px'}} variant="contained">View all</Button>
            </div>
            <div className="elec-right">
                <div>
                    <img className="productimg" src={Cover} alt="covers" />
                    <h5>Plain cases & covers</h5>
                </div>
                <div>
                    <img  className="productimg" src={Moniter} alt="moniter" />
                    <h5>Moniters</h5>
                </div>
                <div>
                    <h5>Printers</h5>
                </div>
                <div>
                    <h5>Best of hair dryers</h5>
                </div>
                <div>
                    <h5>BenQ Moniters</h5>
                </div>
                <div>
                    <h5>View sonic Moniters</h5>
                </div>
            </div>
        </div>
        </>
    )
}

export default Electronics;