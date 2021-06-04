import { Test, TestingModule } from '@nestjs/testing';
import { ListCreditController } from './list-credit.controller';

describe('ListCreditController', () => {
  let controller: ListCreditController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListCreditController],
    }).compile();

    controller = module.get<ListCreditController>(ListCreditController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
