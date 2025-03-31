import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { HttpService } from '@nestjs/axios'

@Injectable()
export class MetarService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService
  ) {}
}
