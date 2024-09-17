import { BrowserRouter , Route , Switch , Redirect } from "react-router-dom";
import NavBar from '../Navbar';
import { ToastContainer } from "react-toastify";

import Home from "../HomeCart";
import NotFound from "../../pages/Error";
import Cart from "../Cart";

export default function HomeCart() {
  return (
 <div>
   <BrowserRouter>
   <Switch>
    <NavBar/>
    <Route path="/cart" component={Cart} />
    <Route path="/src/pages/Error.tsx" component={NotFound} />
    <Route path="/" exact component={Home} />
    </Switch>
    </BrowserRouter>
 </div>
  );
}