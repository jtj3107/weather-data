import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateWeatherDatumDto } from './dto/create-weather-datum.dto';
import { UpdateWeatherDatumDto } from './dto/update-weather-datum.dto';
import { WeatherDataService } from './weather-data.service';

@Controller('weather-data')
export class WeatherDataController {
  constructor(private readonly weatherDataService: WeatherDataService) {}

  @Post()
  create(@Body() createWeatherDatumDto: CreateWeatherDatumDto) {
    console.log(111);

    return this.weatherDataService.create(createWeatherDatumDto);
  }

  @Get()
  findAll() {
    return this.weatherDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weatherDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeatherDatumDto: UpdateWeatherDatumDto) {
    return this.weatherDataService.update(+id, updateWeatherDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weatherDataService.remove(+id);
  }
}
