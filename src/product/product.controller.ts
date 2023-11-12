import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor (private readonly ProductService: ProductService){}

    @Get()
    getClient(){
        return this.ProductService.findAll();
    }

    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) id: number){
        
        console.log(`el id a buscar es ${id}`)
        return this.ProductService.findById(id);

    }

    @Put(':id')
    updateProduct(@Param('id', ParseIntPipe) id: number, @Body() body) {
      return this.ProductService.updateProduct(body, id);
    }
  
    @Delete(':id')
    deleteProduct(@Param('id', ParseIntPipe) id: number) {
      return this.ProductService.deleteProduct(id);
    }
  
    @Post()
    createProduct(@Body() body) {
      return this.ProductService.createProduct(body);
    }

}
