import api from '@/shared/api';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface ProductItems {
  id: number;
  quantity: number;
  item: string;
  productRoute: string;
}

export interface ProductInfo {
  slug: string;
  name: string;
  category: string;
  new: boolean;
  price: number;
  description: string;
  features: string;
  route: string;
  swap: boolean;
}
export interface Product {
  about: ProductInfo;
  items: ProductItems[];
}

export interface getOneProductParams {
  category: string;
  productId: string;
}

interface ProductsState {
  products: ProductInfo[] | null;
  product: Product | null;
  message: string;
}

export const getCategorizedProducts = createAsyncThunk<ProductInfo[], string>(
  'products/getCategorizedProducts',
  async (category: string) => {
    const products = await api.getCategorizedProducts(category);
    return products;
  }
);
export const getOneProduct = createAsyncThunk<Product, getOneProductParams>(
  'products/getOneProduct',
  async ({ category, productId }) => {
    const product = await api.getOneProduct(category, productId);
    return product;
  }
);

const initialState: ProductsState = {
  products: null,
  product: null,
  message: '',
} satisfies ProductsState as ProductsState;
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        getCategorizedProducts.fulfilled,
        (state, action: PayloadAction<ProductInfo[]>) => {
          state.products = action.payload;
          state.message = '';
        }
      )
      .addCase(getCategorizedProducts.pending, (state) => {
        state.message = 'Loading...';
      })
      .addCase(getCategorizedProducts.rejected, (state, action) => {
        state.message = action.error.message || 'Failed to load products';
        console.log(state);
      })
      .addCase(
        getOneProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.product = action.payload;
          state.message = '';
        }
      )
      .addCase(getOneProduct.pending, (state) => {
        state.message = 'Loading...';
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.message = action.error.message || 'Failed to load product';
      });
  },
});

export default productSlice.reducer;
