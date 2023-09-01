import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './public pages/Navbar';
import Footer from './public pages/Footer';
import Home from './public pages/home';

function App() {
  return (
  <>
  <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path="navbar" element={<Navbar/>} />
          <Route path="Footer" element={<Footer/>} />


      

        </Routes>
      </BrowserRouter>
  </>
   
  );
}

export default App;
