import React from 'react';
import { useNavigate } from 'react-router-dom';



function Footer(){
    const navigate = useNavigate();
    return(
        <>
     
        <div>
           <h2>flipcart</h2>
           <button onClick={()=>navigate('/')}>Go to home page</button>
        </div>
        </>
    )
}

export default Footer;