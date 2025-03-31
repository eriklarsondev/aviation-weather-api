import { Controller, Get, Param } from '@nestjs/common'
import { METARService } from './metar.service'

@Controller('metar')
export class METARController {
  constructor(private readonly metarService: METARService) {}

  @Get(':identifier')
  async getWeather(@Param('identifier') identifier: string): Promise<any> {
    try {
      return await this.metarService.getWeather(identifier)
    } catch (err) {
      return err
    }
  }
}
