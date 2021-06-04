import { CreditService } from './credit/credit.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to TFS Backend';
  }

  calculEcheance(Ms : string, ts : string, ns : string){
    let M = parseFloat(Ms);
    let t = parseFloat(ts)/100;
    let n = parseFloat(ns);
    let echeance = ((M*t)/12)/(1-(1+(t/12))**(-n));
    return echeance.toString(); 

  }

  
}
