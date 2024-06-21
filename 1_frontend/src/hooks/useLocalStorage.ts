import { Product, ProductInfo } from '@/redux/Products/productsSlice';

export const useLocalStorage = (key: string, id: string) => {
  const hasProducts = window.localStorage.getItem(key);
  const setProductHook = (value: Product) => {
    try {
      if (hasProducts) {
        const products: Product[] = JSON.parse(hasProducts);
        const alreadyExists = products.filter(
          (product) => product.about.route === id
        );
        if (alreadyExists.length !== 0) return;
        products.push(value);
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(products));
      } else {
        const products: Product[] = [value];
        localStorage.setItem(key, JSON.stringify(products));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const setProductsHook = (value: ProductInfo[]) => {
    try {
      if (hasProducts) return;
      else {
        const products: ProductInfo[] = [];
        value.forEach((product) => {
          products.push(product);
        });
        localStorage.setItem(key, JSON.stringify(products));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getProductHook = () => {
    try {
      if (hasProducts) {
        const product = JSON.parse(hasProducts).filter(
          (item: Product) => item.about.route === id
        );

        if (product) return product[0];
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  };
  const getProductsHook = (category?: string) => {
    try {
      if (hasProducts) {
        const products: ProductInfo[] = JSON.parse(hasProducts);

        if (products && category) {
          return products.filter(
            (product: ProductInfo) => product.category === category
          );
        } else if (products && !category) {
          return products;
        }
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  };

  return { setProductHook, setProductsHook, getProductHook, getProductsHook };
};
