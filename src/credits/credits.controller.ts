import { Credit } from './../entities/credit.entity';
import { CreditService } from './../credit/credit.service';

import { Controller, Get, Post,Put, Delete, Body, Param } from  '@nestjs/common';



@Controller('credits')
export class CreditsController {
    constructor(private creditService: CreditService){

    }
    @Get()
    read(): Promise<Credit[]> {
      return this.creditService.readAll();
    }
    
    @Post('create')
    async create(@Body() credit: Credit): Promise<any> {
      return this.creditService.create(credit);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() credit: Credit): Promise<any> {
        credit.id = Number(id);
        return this.creditService.update(credit);
    }  
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.creditService.delete(id);
    }
}
