import { AppService } from './../app.service';

import { Body, Controller, Get, Post } from '@nestjs/common';


@Controller('calcul-credit')
export class CalculCreditController {
    constructor(private readonly appService: AppService){}
    
    @Post()
  calculEcheance( 
    @Body('montant') montant : string,
    @Body('taux') taux : string,
    @Body('duree') duree : string,
    ): string{
    
    return this.appService.calculEcheance(montant, taux, duree);
  }
}
