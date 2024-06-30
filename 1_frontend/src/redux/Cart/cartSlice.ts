import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CartItem {
  qty: number;
  name: string;
  priceCombined: number;
  slug: string;
  originalPrice: number;
}

interface InitialCart {
  CartItems: CartItem[] | null;
  totalValue: number;
  message: string;
}

const initialState: InitialCart = {
  CartItems: [],
  totalValue: 0,
  message: '',
} satisfies InitialCart as InitialCart;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      if (!state.CartItems) {
        state.CartItems = [action.payload];
      } else if (state.CartItems) {
        const exists = state.CartItems.find(
          (item: CartItem) => item.name === action.payload.name
        );
        if (exists) {
          exists.qty += action.payload.qty;
          exists.priceCombined =
            exists.priceCombined +
            action.payload.originalPrice * action.payload.qty;
        } else {
          state.CartItems.push(action.payload);
        }
      }
      let total = 0;
      state.CartItems.forEach(
        (item: CartItem) => (total += item.priceCombined)
      );
      state.totalValue = total;
    },
    removeAllFromCart: (state) => {
      if (state.CartItems) {
        state.CartItems = [];
        state.totalValue = 0;
        state.message = 'All items were removed from the cart.';
      } else if (!state.CartItems) {
        state.message = 'Nothing to remove.';
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      if (state.CartItems) {
        const item = state.CartItems.find(
          (item: CartItem) => item.name === action.payload
        );
        if (item) {
          item.qty += 1;
          item.priceCombined += item.originalPrice;
          state.totalValue += item.originalPrice;
        } else {
          state.message = 'Unknown error accured...';
        }
      } else {
        state.message = 'Unknown error accured...';
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      if (state.CartItems) {
        const item = state.CartItems.find(
          (item: CartItem) => item.name === action.payload
        );
        if (item && item.qty > 1) {
          item.qty -= 1;
          item.priceCombined -= item.originalPrice;
          state.totalValue -= item.originalPrice;
        } else if (item && item.qty === 1) {
          state.totalValue -= item.originalPrice;
          const filteredItems = state.CartItems.filter(
            (cartItem: CartItem) => cartItem.name !== item.name
          );
          state.CartItems = filteredItems;
        } else {
          state.message = 'Unknown error accured...';
        }
      } else {
        state.message = 'Unknown error accured...';
      }
    },
  },
});

export const {
  addToCart,
  removeAllFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
