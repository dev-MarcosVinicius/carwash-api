import { Test, TestingModule } from '@nestjs/testing';
import { WashController } from '../controllers/wash.controller';
import { WashService } from '../services/wash.service';

describe('WashController', () => {
  let controller: WashController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WashController],
      providers: [WashService],
    }).compile();

    controller = module.get<WashController>(WashController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
