import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { HttpService } from '@nestjs/axios'

@Injectable()
export class METARService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService
  ) {}

  async getWeather(identifier: string): Promise<any> {
    const response = await this.httpService.axiosRef.get(
      `${this.configService.get('BASE_PATH')}/metar/${identifier}`,
      {
        headers: {
          Authorization: `BEARER ${this.configService.get('API_KEY')}`
        }
      }
    )
    return response.data
  }
}
