import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get('get-all')
    findAll(): string {
        return 'This action returns all products';
    }
}
