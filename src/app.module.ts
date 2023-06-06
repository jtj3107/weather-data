import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherDataModule } from './weather-data/weather-data.module';

@Module({
  imports: [WeatherDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
