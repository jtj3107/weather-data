import { Controller, Get } from '@nestjs/common';
import { ObservationPointsInfoService } from './observation-points-info.service';

@Controller('observation-points-info')
export class ObservationPointsInfoController {
  constructor(private readonly observationPointsInfoService: ObservationPointsInfoService) {}

  @Get()
  async saveObservationPoints() {
    console.log('aa');
    
    //return this.observationPointsInfoService.saveObservationPoints();
  }

}
