import { Credit } from './entities/credit.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreditService } from './credit/credit.service';
import { CreditsController } from './credits/credits.controller';
import { CalculCreditController } from './calcul-credit/calcul-credit.controller';
import { ListCreditController } from './list-credit/list-credit.controller';


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
    TypeOrmModule.forFeature([Credit]),
  ],
  controllers: [AppController, CreditsController, CalculCreditController, ListCreditController],
  providers: [AppService, CreditService],
})
export class AppModule {}
