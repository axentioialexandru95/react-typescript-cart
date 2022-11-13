import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from 'react-feather'
import { useShoppingCart } from "../context/ShoppingCartContext";
export function Navbar() {
    const {
        cartQuantity,
        openCart
    } = useShoppingCart();

    return (
        <NavbarBs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                <Button
                    onClick={openCart}
                    style={{
                        width: '50px',
                        height: '50px',
                        position: 'relative',
                        borderRadius: '50%'
                    }} className="btn-dark" variant="outlined-primary">
                    <ShoppingCart />
                    {
                        cartQuantity > 0 && (
                            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                                style={{
                                    width: '1.5rem',
                                    height: '1.5rem',
                                    position: 'absolute',
                                    bottom: '-5px',
                                    right: '-5px',
                                }}
                            >{cartQuantity}</div>
                        )
                    }
                </Button>
            </Container>
        </NavbarBs>
    )
}