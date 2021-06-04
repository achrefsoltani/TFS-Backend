import { Test, TestingModule } from '@nestjs/testing';
import { CalculCreditController } from './calcul-credit.controller';

describe('CalculCreditController', () => {
  let controller: CalculCreditController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculCreditController],
    }).compile();

    controller = module.get<CalculCreditController>(CalculCreditController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
