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

  calculEpargne(Is: string, Ps : string, ns : string, rs : string){
    let I = parseFloat(Is);
    let P = parseFloat(Ps);
    let n = parseFloat(ns);
    let r = parseFloat(rs)/100/12;
    let finalAmount = I*((1+r)**n)+(P*(((1+r)**n)-1))/r ;
    return finalAmount;
  }

  calculNet(Salaire: string, famille: boolean, enfants: string, deductions: string){
    let brut = parseFloat(Salaire);
    
    let nbenfants = parseFloat(enfants);
    
    
    let ded = parseFloat(deductions);
    let ba = brut*12;
    let cnss = (ba / 100)*7.5;
    let taxable = ba - cnss - (ded * 12) - (nbenfants * 70 * 12);
    let impot = (taxable/100)*15;
    let net = taxable - impot;

    return {"net": (ba - impot - cnss)/12,"impot":impot/12, "cnss": cnss/12};
    
  }
}
