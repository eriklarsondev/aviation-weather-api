import { Module } from '@nestjs/common'
import { METARModule } from './metar/metar.module'

@Module({
  imports: [METARModule]
})
export class AppModule {}
