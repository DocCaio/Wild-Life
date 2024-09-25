
import { Container } from "react-bootstrap"
import { Store } from "./Store"
import { About } from "./About"
import { Navbar } from "../components/Shop/Navbar"
import { ShoppingCartProvider } from "../context/ShoppingCartContext"
import 'bootstrap/dist/css/bootstrap.min.css';

function Tickets() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">      
          
        <Store />
        <About/>                
        
      </Container>
    </ShoppingCartProvider>
  )
}

export default Tickets;
