import { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { Item } from "../data/items";
import { useLocalStorage } from "../hooks/useLocalStorage";


type ShoppingCartProviderProps = {
    children: React.ReactNode;
};

type ShoppingCartContext = {
    cartQuantity: number;
    cartItems: Cart[]
    openCart: () => void;
    closeCart: () => void;
    getItemQuantity: (id: number) => number;
    increaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    decreaseQuantity: (id: number) => void;
}

type Cart = {
    id: number;
    quantity: number;
}


const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    const context = useContext(ShoppingCartContext);

    if (!context) {
        throw new Error(
            "useShoppingCart must be used within a ShoppingCartProvider"
        );
    }

    return context;
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cart, setCart] = useLocalStorage<Cart[]>("shopping-cart", []);
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const openCart = () => {
        setIsOpen(true)
    }

    const closeCart = () => {
        setIsOpen(false)
    }


    const getItemQuantity = (id: number) => {
        const item = cart?.find((item: { id: number; }) => item.id === id);

        return item?.quantity || 0;
    };

    const increaseQuantity = (id: number) => {
        setCart((currentCart: any[]) => {
            if (currentCart?.find(item => item.id === id) == null) {
                return [
                    ...currentCart || [],
                    {
                        id,
                        quantity: 1,
                    },
                ];
            } else {
                return currentCart?.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }

                    return item;
                });
            }
        })
    };


    const decreaseQuantity = (id: number) => {
        setCart((currentCart) => {
            if (currentCart?.find(item => item.id === id) == null) {
                return [
                    ...currentCart || [],
                    {
                        id,
                        quantity: 1,
                    },
                ];
            } else {
                return currentCart?.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                    }

                    return item;
                });
            }
        })
    };



    const removeFromCart = (id: number) => {

        setCart((currentCart) => {
            return currentCart?.filter((item) => item.id !== id);
        });

    };

    const cartQuantity = cart?.reduce((acc, item) => acc + item.quantity, 0);




    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseQuantity,
            decreaseQuantity,
            removeFromCart,
            openCart,
            closeCart,
            cartItems: cart || [],
            cartQuantity: cartQuantity || 0,
        }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    );
}
