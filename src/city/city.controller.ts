import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) { }

  @Get()
  findAllCity() {
    return this.cityService.findAllCity()
  }

  @Get(':id')
  findCitybyId(@Param("id") id:string) {
    return this.cityService.findCityById(+id)
  }

  @Post()
  postAlamat(@Body() body:any){
    return this.cityService.postAlamat(body)
  }

}
