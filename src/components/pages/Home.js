import React from "react";
import NavBar from "./Navbar";
import Header from "./Header";
import Carousels from "./Carousel";
import Footer from "./Footer";
import './Home.css';

import Electronics from "../content/Electronics";


function Home() { 
 
    return ( 
      <>
      <NavBar />
      <Header />
      <Carousels />
    
       <div> 
           <Electronics />
           
      </div>
      <Footer />
      </>
    ); 
} 
export default Home;


// import { useNavigate } from "react-router-dom";
 // const navigate = useNavigate();
// <h1>home page </h1> 
// <button onClick={()=>navigate('/About')}>Go to About page</button>