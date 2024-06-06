import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [];
  findAllByCategory(category: 'HEADPHONES' | 'SPEAKERS' | 'EARPHONES') {
    return this.products.find((product) => product.category === category);
  }
  findOne(category: 'HEADPHONES' | 'SPEAKERS' | 'EARPHONES', id: string) {
    const categorized = this.products.find(
      (product: any) => product.category === category,
    );

    return categorized.find((product: any) => product.id === id);
  }
}
