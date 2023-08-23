import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObservationPointsInfoModule } from './observation-points-info/observation-points-info.module';
import { WeatherDataModule } from './weather-data/weather-data.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.local',
      isGlobal: true,
    }), WeatherDataModule, ObservationPointsInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
