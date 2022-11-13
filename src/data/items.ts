// create list of items with id, name, price and image from the internet
export interface Item {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

// export items with Item as a structure and image taken from the internet
export const items: Item[] = [
    {
        id: 1,
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.495,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        quantity: 0,
    },
    {
        id: 2,
        name: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 221.3,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        quantity: 26,
    },
    {
        id: 3,
        name: "Mens Cotton Jacket",
        price: 55.99,
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        quantity: 31,
    },
    {
        id: 4,
        name: "Mens Casual Slim Fit",
        price: 15.99,
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        quantity: 42,
    },
]