import { Test, TestingModule } from '@nestjs/testing'
import { METARService } from './metar.service'

describe('METARService', () => {
  let service: METARService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [METARService]
    }).compile()

    service = module.get<METARService>(METARService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
