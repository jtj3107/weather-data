import { Test, TestingModule } from '@nestjs/testing';
import { ObservationPointsInfoService } from './observation-points-info.service';

describe('ObservationPointsInfoService', () => {
  let service: ObservationPointsInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObservationPointsInfoService],
    }).compile();

    service = module.get<ObservationPointsInfoService>(ObservationPointsInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
