import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

import { Item } from "../data/items";
import { formatCurrency } from "../utils/formatCurrency";

export function StoreItem({
    id,
    name,
    price,
    image,
    quantity,
}: Item) {

    const {
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useShoppingCart();


    const addedItems = getItemQuantity(id);

    const handleAddToCart = () => {
        increaseQuantity(
            id
        );
    };

    const handleRemoveFromCart = () => {
        removeFromCart(id);
    };

    const handleDecreaseCartQuantity = () => {
        decreaseQuantity(
            id
        );
    }

    return (
        <Card className={'store-item'} style={{
            height: '100%'
        }}>
            <Card.Img variant="top" height={200} style={{
                objectFit: 'contain'
            }} src={image} alt={name} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{name}</Card.Title>
                <Card.Text >
                    {formatCurrency(price)}
                </Card.Text>
                <div className="mt-auto">
                    {addedItems > 0 && (
                        <div className="d-flex mb-2 justify-content-between align-items-center mt-2">
                            <Button onClick={handleRemoveFromCart} variant="outline-primary">
                                -
                            </Button>
                            <span>{addedItems}</span>
                            <Button onClick={handleAddToCart} variant="outline-primary">
                                +
                            </Button>
                            <div>
                                Price:
                                {formatCurrency(addedItems * price)}
                            </div>
                        </div>
                    )}
                    {quantity > 0 ? (
                        <>
                            {addedItems === 0 && (
                                <Button className="w-100" onClick={handleAddToCart} variant="primary">
                                    Add to cart
                                </Button>
                            )}
                        </>
                    ) : (
                        <Button variant="secondary" className="w-100">
                            Out of stock
                        </Button>
                    )}
                    {addedItems > 0 && (
                        <div className="mt-2">
                            <Button variant="outline-primary" onClick={handleRemoveFromCart} className="w-100">
                                Remove from cart
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}