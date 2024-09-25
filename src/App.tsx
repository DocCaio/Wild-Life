import Error from './pages/Error';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import Cart from './pages/Tickets';
import {Store} from './pages/Store';
import{ About} from './pages/About'


function App() {


 

  return (
    
   <BrowserRouter>      
        <Routes>
          <Route path="/" element={<Home/>} />          
          <Route path="*" element={<Error/>} />
          <Route path="/info" element={<Info/>} /> 
          <Route path="/tickets" element={<Cart/>} /> 
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />                  
        </Routes>     
    </BrowserRouter>
    
  );
}

export default App;
