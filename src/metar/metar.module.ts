import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { MetarController } from './metar.controller'
import { MetarService } from './metar.service'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [MetarController],
  providers: [MetarService]
})
export class MetarModule {}
