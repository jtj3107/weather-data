import { Test, TestingModule } from '@nestjs/testing';
import { ObservationPointsInfoController } from './observation-points-info.controller';
import { ObservationPointsInfoService } from './observation-points-info.service';

describe('ObservationPointsInfoController', () => {
  let controller: ObservationPointsInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObservationPointsInfoController],
      providers: [ObservationPointsInfoService],
    }).compile();

    controller = module.get<ObservationPointsInfoController>(ObservationPointsInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
