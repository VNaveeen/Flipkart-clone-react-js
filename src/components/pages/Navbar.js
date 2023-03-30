import React from "react";
import { useState } from "react";
import './Navbar.css';
import TextField from '@mui/material/TextField';
//import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import flipkart from '../../assests/flipkart.png';


 function NavBar() {

    const [placeholder, setPlaceholder] = useState("Search for products,brands and more");
    function handleFocus() {
        if (placeholder === "Search for products,brands and more") {
          setPlaceholder("Search for products,brands and more");
        }
      }

    return(
     <>
     <div className="nav-cnt">
        <section className="f-logo">
            <img className="flip-img" src={flipkart} alt="flipkart"></img>
            <a className="explore" href="/plus">Explore<span className="s-plus">Plus</span></a>
        </section>

        <div>
            <TextField className="inp-box" sx={{backgroundColor : 'white' , width : '600px' , marginTop : '10px' , marginBottom : "5px", borderRadius : "3px", }} id="outlined-basic" placeholder="Search for products,brands and more" onFocus={handleFocus} variant="outlined" />
        </div>
        <div>
            {/* <Stack> */}
            <Button style={{backgroundColor : 'white' , width : '100px', marginTop : '12px' , marginLeft : '30px' ,marginRight : '10px'}} variant="outlined">Login</Button>
            {/* </Stack> */}
        </div>
        <div>
            <Button style={{marginTop : '15px' ,marginLeft : '15px' }} variant="text"><div className="div-btn">Become a seller</div></Button>
        </div>
        <div>
            <Button style={{marginTop : '15px' ,marginLeft : '15px' }} variant="text"><div className="div-btn">More</div></Button>
        </div>
        <div>
            <Button style={{marginTop : '15px' ,marginLeft : '15px' }} variant="text" startIcon={<ShoppingCartIcon  sx={{ color: "white" }}/>}><div className="div-btn">cart</div></Button>
        </div>

     </div>

    

    
     </>
    )
}

export default NavBar;



// https://mui.com/material-ui/react-autocomplete/#customization
//https://codesandbox.io/s/determined-star-nvf2vl?file=/demo.js