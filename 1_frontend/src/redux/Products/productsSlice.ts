import api from '@/shared/api';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface ProductItems {
  id: number;
  quantity: number;
  item: string;
  productRoute: string;
}

export interface ProductInfo {
  title: null | undefined;
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
  all: ProductInfo[] | null;
  one: Product | null;
  message: string;
}

export const getAllProducts = createAsyncThunk<ProductInfo[]>(
  'products/getAllProducts',
  async () => {
    const products = await api.getAllProducts();
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
  all: null,
  one: null,
  message: '',
} satisfies ProductsState as ProductsState;
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        getAllProducts.fulfilled,
        (state, action: PayloadAction<ProductInfo[]>) => {
          state.all = action.payload;
          state.message = '';
        }
      )
      .addCase(getAllProducts.pending, (state) => {
        state.message = 'Loading...';
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.message = action.error.message || 'Failed to load products';
      })
      .addCase(
        getOneProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.one = action.payload;
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
