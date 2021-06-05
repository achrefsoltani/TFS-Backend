import { Epargne } from './../entities/epargne.entity';
import { EpargneService } from './../epargne/epargne.service';
import { Controller, Get, Post,Put, Delete, Body, Param } from  '@nestjs/common';


@Controller('epargnes')
export class EpargnesController {
    constructor(private epargneService: EpargneService){

    }
    @Get()
    read(): Promise<Epargne[]> {
      return this.epargneService.readAll();
    }
    
    @Post('create')
    async create(@Body() epargne: Epargne): Promise<any> {
      return this.epargneService.create(epargne);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() epargne: Epargne): Promise<any> {
        epargne.id = Number(id);
        return this.epargneService.update(epargne);
    }  
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.epargneService.delete(id);
    }
}
