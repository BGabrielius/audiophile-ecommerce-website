import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async findAllByCategory(category: 'headphones' | 'speakers' | 'earphones') {
    if (
      category !== 'headphones' &&
      category !== 'speakers' &&
      category !== 'earphones'
    ) {
      throw new NotFoundException('Category does not exist');
    }
    return this.databaseService.product.findMany({
      where: {
        category,
      },
    });
  }
  async findOne(category: string, id: string) {
    const product = await this.databaseService.product.findFirst({
      where: {
        route: id,
      },
    });
    if (!product) {
      throw new NotFoundException('Product does not exist');
    } else if (product.category !== category) {
      throw new NotFoundException('Category does not exist');
    }
    return product;
  }
  async findOneItems(id: string) {
    const items = await this.databaseService.itemsIncluded.findMany({
      where: {
        productRoute: id,
      },
    });
    if (items.length === 0) {
      throw new NotFoundException('There are no items with the specified id');
    }
    return items;
  }
}
