import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Navbar from './Public/Navbar';
import Home from './Public/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
