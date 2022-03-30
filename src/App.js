import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Products from './components/Products'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     
    
      <Navbar/>
      <Home/>
      <About/>
      <Products/>
      <Gallery/>
      <Contact/>
      <Footer/>
   

    
     

    
  
    </div>
  );
}

export default App;
