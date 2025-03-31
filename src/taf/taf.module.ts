import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { HttpModule } from '@nestjs/axios'
import { TAFController } from './taf.controller'
import { TAFService } from './taf.service'

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [TAFController],
  providers: [TAFService]
})
export class TAFModule {}
