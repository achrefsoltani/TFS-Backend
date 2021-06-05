import { AppService } from './../app.service';
import { Epargne } from './../entities/epargne.entity';
import { EpargneService } from './../epargne/epargne.service';
import { Controller, Get, Post,Put, Delete, Body, Param } from  '@nestjs/common';


@Controller('epargnes')
export class EpargnesController {
    constructor(private epargneService: EpargneService, private readonly appService: AppService){

    }
    @Get()
    read(): Promise<Epargne[]> {
      return this.epargneService.readAll();
    }
    
    @Post('create')
    async create(@Body() epargne: Epargne): Promise<any> {
      return this.epargneService.create(epargne);
    } 
    
    @Post('calcul')
    async calcul(
      @Body('initial') initial : string,
      @Body('versement') versement : string,
      @Body('taux') taux : string,
      @Body('duree') duree : string,
    ): Promise<any> {
      return this.appService.calculEpargne(initial, versement, duree, taux);
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
