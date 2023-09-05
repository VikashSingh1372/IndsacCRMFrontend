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
import EditStockDetails from './Public/EditStockDetails';
import CustomerDetails from "./Public/CustomerDetails";
import NewCustomerInformation from './Public/NewCustomerInformation';
import DataTable from './Public/Sections/DataTable';
import Task from './Public/Sections/Task';
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
              <Route exact path='newlead' element={<NewVendor />}></Route>
              <Route exact path='newvendor' element={<NewLead />}></Route>
              <Route exact path='editstockdetails' element={<EditStockDetails />}></Route>
              <Route exact path='customerdetails' element={<CustomerDetails />}></Route>
              <Route exact path='newproduct' element={<NewProduct />}></Route>
              <Route exact path='newcustomerinformation' element={<NewCustomerInformation />}></Route>

              <Route exact path='datatable' element={<DataTable />}></Route>
             


             
             
              

             
             
        </Route>



      </Routes>
      </BrowserRouter>
      


     
    </div>
  );
}

export default App;
