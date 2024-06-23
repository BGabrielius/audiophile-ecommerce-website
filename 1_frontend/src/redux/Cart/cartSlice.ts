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
}

const initialState: InitialCart = {
  CartItems: [],
  totalValue: 0,
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

      console.log(action.payload);
      console.log(state.CartItems, 'state');
    },
    // increaseQuantity: (state, action: PayloadAction<number>) => {
    //   const exists = state.CartItems.find(
    //     (item: CartItem) => item.name === action.payload.name
    //   );
    //   if (exists) {
    //     exists.qty += 1;
    //     exists.priceCombined = exists.originalPrice * exists.qty;
    //   } else if () {

    //   } else {
    //     state.CartItems.push(action.payload);
    //   }
    // },
    // decreaseQuantity: (state, action: PayloadAction<number>) => {
    //   const exists = state.CartItems.find(
    //     (item: CartItem) => item.name === action.payload.name
    //   );
    //   if (exists) {
    //     exists.qty += 1;
    //     exists.priceCombined = exists.originalPrice * exists.qty;
    //   } else {
    //     state.CartItems.push(action.payload);
    //   }
    // },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
