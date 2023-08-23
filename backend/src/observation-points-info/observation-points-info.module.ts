import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ObservationPointsInfoController } from './observation-points-info.controller';
import { observationPointsInfoProviders } from './observation-points-info.providers';
import { ObservationPointsInfoService } from './observation-points-info.service';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    ObservationPointsInfoController,
  ],
  providers: [
    ObservationPointsInfoService,
    ...observationPointsInfoProviders,
  ]
})
export class ObservationPointsInfoModule { }
