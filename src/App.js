import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './publicpages/Home';
import About from './publicpages/About';

function App() {
  return (
  <>
  <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="about" element={<About/>} />



      

        </Routes>
      </BrowserRouter>
  </>
   
  );
}

export default App;
