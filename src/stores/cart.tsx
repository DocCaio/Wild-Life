import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types for your cart items and state
interface CartItem {
    productId: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    statusTab: boolean;
}

// Set initial state with proper typing
const initialState: CartState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")!) : [],
    statusTab: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<{ productId: string; quantity: number }>) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({ productId, quantity });
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        changeQuantity(state, action: PayloadAction<{ productId: string; quantity: number }>) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (quantity > 0) {
                state.items[indexProductId].quantity = quantity;
            } else {
                state.items = state.items.filter(item => item.productId !== productId);
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        toggleStatusTab(state) {
            state.statusTab = !state.statusTab;
        },
    },
});

// Export actions and reducer
export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
