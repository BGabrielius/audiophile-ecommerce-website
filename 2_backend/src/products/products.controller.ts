import { Controller, Get, Param } from '@nestjs/common';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('all')
  findAll() {
    console.log('back');
    return this.productsService.findAll();
  }

  @Get(':category/:id')
  findOne(
    @Param('category') category: 'headphones' | 'speakers' | 'earphones',
    @Param('id') id: string,
  ) {
    return this.productsService.findOne(category, id);
  }
}
