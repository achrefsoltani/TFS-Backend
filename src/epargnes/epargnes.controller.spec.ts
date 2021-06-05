import { Test, TestingModule } from '@nestjs/testing';
import { EpargnesController } from './epargnes.controller';

describe('EpargnesController', () => {
  let controller: EpargnesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EpargnesController],
    }).compile();

    controller = module.get<EpargnesController>(EpargnesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
