import { Controller } from '@nestjs/common'
import { MetarService } from './metar.service'

@Controller('metar')
export class MetarController {
  constructor(private readonly metarService: MetarService) {}
}
