import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { HttpModule } from '@nestjs/axios'
import { METARController } from './metar.controller'
import { METARService } from './metar.service'
@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [METARController],
  providers: [METARService]
})
export class METARModule {}
