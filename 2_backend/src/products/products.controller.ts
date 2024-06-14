import { Controller, Get, Param, Query } from '@nestjs/common';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':category')
  findAllByCategory(
    @Param('category') category: 'headphones' | 'speakers' | 'earphones',
  ) {
    return this.productsService.findAllByCategory(category);
  }

  @Get(':category/:id')
  findOne(
    @Param('category') category: 'headphones' | 'speakers' | 'earphones',
    @Param('id') id: string,
  ) {
    return this.productsService.findOne(category, id);
  }
}
