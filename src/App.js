import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
     
    
      <Navbar/>
      <Home/>
      <About/>
      <Gallery/>
      <Contact/>
   

    
     

    
  
    </div>
  );
}

export default App;
