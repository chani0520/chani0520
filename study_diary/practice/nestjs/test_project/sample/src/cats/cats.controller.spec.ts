import { Test } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';

const moduleMocker = new ModuleMocker(global);

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CatsController],
    })
      .useMocker((token) => {
        if (token === CatsService) {
          return { findOne: jest.fn().mockResolvedValue(results) };
        }

        if (typeof token === 'function') {
          const mockMetadata = moduleMocker.getMetadata(
            token,
          ) as MockFunctionMetadata<any, any>;
          const Mock = moduleMocker.generateFromMetadata(mockMetadata);
        }
      })
      .compile();

    controller = moduleRef.get<CatsController>(CatsController);
  });

  describe('findOne', () => {
    it('should return an array of cats', async () => {
      const result = 0;

      jest.spyOn(controller, 'findOne').mockImplementation(() => results);

      expect(await controller.findOne(1)).toBe(result);
    });
  });
});
