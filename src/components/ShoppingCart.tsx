import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utils/formatCurrency"
import { CartItem } from "./CartItem"
import { StoreItem } from "./StoreItem"
import { items } from "../data/items"

type ShoppingCartProps = {
    isOpen: boolean
}


export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {

    const { closeCart, cartItems } = useShoppingCart()

    return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(
                    (item) => <CartItem key={item.id} {...item} />

                )}
                <div className="ms-auto fw-bold fs-5">
                    Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                        const item = items.find(item => item.id === cartItem.id)
                        if (item == null) {
                            return total
                        }
                        return total + (item.price * cartItem.quantity)
                    }, 0))}
                </div>
            </Stack>


            {cartItems.length === 0 && <div className="text-center">Your cart is empty</div>}
            {cartItems.length > 0 && <div className="text-center">
                <button className="btn btn-primary w-100 my-2">Checkout</button>
            </div>}
        </Offcanvas.Body>
    </Offcanvas>
}