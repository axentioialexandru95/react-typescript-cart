import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type CartItemProps = {
    id: number;
    quantity: number;
}

import { items } from "../data/items";
import { formatCurrency } from "../utils/formatCurrency";

export const CartItem = ({ id, quantity }: CartItemProps) => {

    const { removeFromCart } = useShoppingCart()
    const item = items.find(item => item.id === id)

    if (item == null) {
        return null
    }

    return (
        <Stack direction="horizontal" gap={2} className={
            "align-items-center d-flex"

        }>
            <img src={item.image} style={{
                width: '125px',
                height: '75px',
                objectFit: 'contain',

            }} alt="item" />
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && <span style={{
                        fontSize: '.65rem',
                    }} className="text-muted">{quantity}x</span>}
                </div>
                <div>
                    <span style={{
                        fontSize: '.75rem',
                    }} className="text-muted">{formatCurrency(item.price)}</span>

                </div>
            </div>
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}