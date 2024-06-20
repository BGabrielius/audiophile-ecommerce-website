import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async findAll() {
    const products = await this.databaseService.product.findMany();
    if (!products) {
      throw new NotFoundException('Whoops! No products were found');
    }
    console.log('from controller');
    return products;
  }

  async findOne(category: string, id: string) {
    const about = await this.databaseService.product.findFirst({
      where: {
        route: id,
      },
    });
    if (!about) {
      throw new NotFoundException('Product does not exist');
    } else if (about.category !== category) {
      throw new BadRequestException('Bad request');
    }
    const items = await this.databaseService.itemsIncluded.findMany({
      where: {
        productRoute: id,
      },
    });
    if (items.length === 0) {
      throw new NotFoundException('There are no items with the specified id');
    }
    const product = {
      about: about,
      items: items,
    };
    return product;
  }
}
