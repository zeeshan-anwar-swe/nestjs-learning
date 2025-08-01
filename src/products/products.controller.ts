import {
  Controller,
  Get,
  Param,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { url } from 'inspector';

@Controller('products')
export class ProductsController {
  @Get('all')
  findAll(@Query() query) {
    return query;
  }

  @Get('redirect')
  @Redirect()
  redirect() {
    return { url: 'https://google.com' };
  }

  @Get(':id')
  findOne(@Param() param) {
    return param;
  }
}
