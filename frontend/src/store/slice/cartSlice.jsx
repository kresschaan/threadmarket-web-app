import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        total: [],
        address: [],
    },
    reducers: {
        addCart(state, action) {
            const { id, name, quantity } = action.payload;
            const existingItem = state.cart.find(
                (item) => item.id === id && item.name === name
            );

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.cart.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    image: action.payload.image,
                    quantity: action.payload.quantity,
                    price: action.payload.price,
                    variant: action.payload.variant,
                });
            }
        },
        updateQuantity(state, action) {
            const updatedCart = state.cart.map((item) => {
                if (item.id === action.payload.productId) {
                    return { ...item, quantity: action.payload.newQuantity };
                }
                return item;
            });

            return { ...state, cart: updatedCart };
        },
        removeItem(state, action) {
            const updatedCart = state.cart.filter((item) => {
                return item.id !== action.payload.productId;
            });

            state.cart = updatedCart;
        },
        addTotal(state, action) {
            state.total.push({
                subtotal: action.payload.subTotal,
                shipping: action.payload.shippingFee,
                tax: action.payload.tax,
                total: action.payload.total,
                shippingOption: action.payload.shippingOption,
            });
        },
        addAddress(state, action) {
            state.address.push({
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                streetAdd1: action.payload.streetAdd1,
                streetAdd2: action.payload.streetAdd2,
                state: action.payload.state,
                city: action.payload.city,
                zip: action.payload.zip,
                phone: action.payload.phone,
            });
        },
        clearState: () => {
            return {
                cart: [],
                total: [],
                address: [],
            };
        },
    },
});

export const {
    addCart,
    updateQuantity,
    removeItem,
    addTotal,
    addAddress,
    clearState,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
