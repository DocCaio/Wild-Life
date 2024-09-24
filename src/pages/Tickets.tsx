import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Cards } from "./Cards"
import { Store } from "./Store"
import { About } from "./About"
import { Navbar } from "../components/Shop/Navbar"
import { ShoppingCartProvider } from "../context/ShoppingCartContext"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Cards/>} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
