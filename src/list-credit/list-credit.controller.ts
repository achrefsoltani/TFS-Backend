import { CreditService } from './../credit/credit.service';

import { AppService } from './../app.service';

import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('list-credit')
export class ListCreditController {
    constructor(private readonly appService: AppService, private creditService: CreditService){}
    
    @Post()
  ListEcheance( @Body('raison') raison : string){
        let Credit = this.creditService.readbyraison(raison);
        return Credit;
  }
}
