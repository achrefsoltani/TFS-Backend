import { AppService } from './../app.service';

import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('budget')
export class BudgetController {
    constructor(private readonly appService: AppService){}
    
    @Post()
  Net( 
    @Body('Budget') budget : string,
    ){
    
    return this.appService.calculBudget(budget);
  }
}
