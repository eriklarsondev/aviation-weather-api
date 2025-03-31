import { Module } from '@nestjs/common'
import { MetarModule } from './metar/metar.module'

@Module({
  imports: [MetarModule]
})
export class AppModule {}
