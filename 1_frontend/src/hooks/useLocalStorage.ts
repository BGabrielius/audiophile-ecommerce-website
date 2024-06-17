import { Product } from '@/redux/Products/productsSlice';

export const useLocalStorage = (key: string, id: string) => {
  const hasProducts: string | null = window.localStorage.getItem(key);
  const setProductHook = (value: Product) => {
    try {
      if (hasProducts) {
        const products: Product[] = JSON.parse(hasProducts);
        const alreadyExists = products.filter(
          (product) => product.about.route === id
        );
        if (alreadyExists.length !== 0) return;
        console.log(alreadyExists);
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
  const getProductHook = () => {
    try {
      if (hasProducts) {
        console.log('from hook', JSON.parse(hasProducts));
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

  return { setProductHook, getProductHook };
};
