import { Module } from '@nestjs/common'
import { METARModule } from './metar/metar.module'
import { TAFModule } from './taf/taf.module'

@Module({
  imports: [METARModule, TAFModule]
})
export class AppModule {}
