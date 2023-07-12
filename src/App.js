import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Navbar from './Public/Navbar';
import Home from './Public/Home';
import Login from './Public/Login';
import Register from './Public/Register';
import LandingPage from './User/LandingPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        {/* <Route path='/'element={<Home/>}/> */}
        {/* <Route path='/log-in'element={<Login/>}/> */}
        {/* <Route path='/register'element={<Register/>}/> */}
        <Route path='/'element={<LandingPage/>}/>
      </Routes>
      </BrowserRouter>
      


     
    </div>
  );
}

export default App;
