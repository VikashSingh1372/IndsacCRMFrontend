import './App.css';
import { BrowserRouter,Routes,Route,Switch } from 'react-router-dom';

import Navbar from './Public/Navbar';
// import Home from './Public/Home';
import Login from './Public/Login';
import Register from './Public/Register';
import LandingPage from './User/LandingPage';
import NewCustomer from './Public/NewCustomer';
import Home from './User/Home';
import NewLead from './Public/NewLead';
import NewVendor from './Public/NewVendor';
import NewProduct from "./Public/NewProduct";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>


        {/* <Route path='/log-in'element={<Login/>}/> */}
        {/* <Route path='/regester'element={<Register/>}/> */}
        {/* <Route path='/home'element={<Home/>}/> */}
        
        {/* following route will be /user */}
        <Route path='/'element={<LandingPage/>}>
              {/* <Route path='/home' element={<Home/>} /> */}
              <Route exact path='newcustomer' element={<NewCustomer />}></Route>
              <Route exact path='newvendor' element={<NewVendor />}></Route>
              <Route exact path='newlead' element={<NewLead />}></Route>

              

              <Route exact path='newproduct' element={<NewProduct />}></Route>
              
        </Route>


      </Routes>
      </BrowserRouter>
      


     
    </div>
  );
}

export default App;
