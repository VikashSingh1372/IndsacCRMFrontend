import './App.css';
import { BrowserRouter,Routes,Route,Switch } from 'react-router-dom';

import Navbar from './Public/Navbar';
// import Home from './Public/Home';
import Login from './Public/Login';
import Register from './Public/Register';
import LandingPage from './User/LandingPage';
import NewCustomer from './Public/NewCustomer';
import Home from './User/Home';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>


        <Route path='/log-in'element={<Login/>}/>
        <Route path='/regester'element={<Register/>}/>
        {/* <Route path='/home'element={<Home/>}/> */}
        <Route path='/user'element={<LandingPage/>}>
              {/* <Route path='/home' element={<Home/>} /> */}
              <Route exact path='newcustomer' element={<NewCustomer />}></Route>

        </Route>



      </Routes>
      </BrowserRouter>
      


     
    </div>
  );
}

export default App;
