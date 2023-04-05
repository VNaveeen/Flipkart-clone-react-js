import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
// import Footer from './components/pages/Footer';
import Cartpage from './components/navigates/Cartpage';
import './App.css';

function App() {
  return (
    <>
   
    <Router>
      <Routes>
        <Route path='/' exact Component={Home} />
        {/* <Route path='/Footer' Component={Footer} /> */}
        <Route path='/Cartpage' Component={Cartpage} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
