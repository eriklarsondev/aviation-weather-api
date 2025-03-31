import { Test, TestingModule } from '@nestjs/testing'
import { TAFController } from './taf.controller'

describe('TAFController', () => {
  let controller: TAFController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TAFController]
    }).compile()

    controller = module.get<TAFController>(TAFController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
