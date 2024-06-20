import { Product, ProductInfo } from '@/redux/Products/productsSlice';
import axios from 'axios';

const HOST = 'http://localhost:3001/products';

class API {
  async getAllProducts(): Promise<ProductInfo[]> {
    const response = await axios.get(`${HOST}/all`);
    return response.data;
  }

  async getOneProduct(category: string, productId: string): Promise<Product> {
    const response = await axios.get(`${HOST}/${category}/${productId}`);
    return response.data;
  }
}

const api = new API();

export default api;
