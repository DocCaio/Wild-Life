import Error from './pages/Error';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import Cart from './pages/Tickets';


function App() {


 

  return (
    
   <BrowserRouter>      
        <Routes>
          <Route path="/" element={<Home/>} />          
          <Route path="*" element={<Error/>} />
          <Route path="/info" element={<Info/>} /> 
          <Route path="/tickets" element={<Cart/>} />                   
        </Routes>     
    </BrowserRouter>
    
  );
}

export default App;
