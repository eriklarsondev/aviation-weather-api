import { Controller, Get, Param } from '@nestjs/common'
import { TAFService } from './taf.service'

@Controller('taf')
export class TAFController {
  constructor(private readonly tafService: TAFService) {}

  @Get(':identifier')
  async fetchTAF(@Param('identifier') identifier: string) {
    try {
      return await this.tafService.fetchTAF(identifier)
    } catch (err) {
      return err
    }
  }
}
