import { AppService } from './../app.service';

import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('net')
export class NetController {
    constructor(private readonly appService: AppService){}
    
    @Post()
  Net( 
    @Body('brut') brut : string,
    @Body('famille') famille : boolean,
    @Body('enfants') enfants : string,
    @Body('deductions') ded: string,
    ){
    
    return this.appService.calculNet(brut,famille,enfants,ded);
  }
}
