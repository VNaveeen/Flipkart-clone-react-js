import React from "react";
import NavBar from "./Navbar";
import Header from "./Header";
import Carousels from "./Carousel";
import Footer from "./Footer";
import './Home.css';

import Electronics from "../content/Electronics";
import Sports from "../content/Sports";
import Deals from "../content/Deals";
import Appliances from "../content/Appliances";
import Toys from "../content/Toys";


function Home() { 
 
    return ( 
      <>
      <div className="home-bo">
      <NavBar />
      <Header />
      <Carousels />
    
       <div> 
           <Electronics />
           <Sports />
           < Deals />
           <Appliances />
           <Toys />
           
      </div>
      <Footer />
      </div>
      </>
    ); 
} 
export default Home;


// import { useNavigate } from "react-router-dom";
 // const navigate = useNavigate();
// <h1>home page </h1> 
// <button onClick={()=>navigate('/About')}>Go to About page</button>