import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherDataModule } from './weather-data/weather-data.module';
import { ObservationPointsInfoModule } from './observation-points-info/observation-points-info.module';

@Module({
  imports: [WeatherDataModule, ObservationPointsInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
