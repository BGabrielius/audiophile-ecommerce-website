import { Controller, Get, Param, Query } from '@nestjs/common';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  /*
    // :id = category of the products
    // get all products from the category
    
    */
  @Get(':id') // GET /products/:id
  findAllByCategory(
    @Query('category') category: 'HEADPHONES' | 'SPEAKERS' | 'EARPHONES',
  ) {
    return this.productsService.findAllByCategory(category);
  }
  // -----------------------------------------------
  /*
    // 1st -> :id = category of the products
    // 2nd -> :id = product of the category
    // get a single product from the category
    
    */
  @Get(':category/:id') // Get /products/:id/:id
  findOne(
    @Param('category') category: 'HEADPHONES' | 'SPEAKERS' | 'EARPHONES',
    @Param('id') id: string,
  ) {
    return this.productsService.findOne(category, id);
  }
}
