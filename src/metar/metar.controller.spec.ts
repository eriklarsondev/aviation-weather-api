import { Test, TestingModule } from '@nestjs/testing'
import { METARController } from './metar.controller'

describe('METARController', () => {
  let controller: METARController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [METARController]
    }).compile()

    controller = module.get<METARController>(METARController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
