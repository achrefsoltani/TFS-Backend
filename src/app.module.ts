import { Epargne } from './entities/epargne.entity';
import { Credit } from './entities/credit.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreditService } from './credit/credit.service';
import { CreditsController } from './credits/credits.controller';
import { CalculCreditController } from './calcul-credit/calcul-credit.controller';
import { ListCreditController } from './list-credit/list-credit.controller';
import { EpargneService } from './epargne/epargne.service';
import { EpargnesController } from './epargnes/epargnes.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'tfsdb',
      username: 'root',
      password: '',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Credit,Epargne]),
  ],
  controllers: [AppController, CreditsController, CalculCreditController, ListCreditController, EpargnesController],
  providers: [AppService, CreditService, EpargneService],
})
export class AppModule {}
