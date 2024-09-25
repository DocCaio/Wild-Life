import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../../data/items.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../pages/styles/error.module.css';
import { Link } from "react-router-dom";
import Modal from "../Modal";
import { useState } from "react";

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()
  const [openModal, setOpenModal] = useState(false)


  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div id={styles.cart} className="ms-auto fw-bold fs-5">

            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
            <div>
              <div>
                <button className={styles.btn}  onClick={() => setOpenModal(true)}>Finish</button>

              </div>
              <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                <Link to={'/'}></Link>
              </Modal>

            </div>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
