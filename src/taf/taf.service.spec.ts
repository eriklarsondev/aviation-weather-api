import { Test, TestingModule } from '@nestjs/testing'
import { TAFService } from './taf.service'

describe('TAFService', () => {
  let service: TAFService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TAFService]
    }).compile()

    service = module.get<TAFService>(TAFService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
