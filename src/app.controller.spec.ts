import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('should return "foo"', () => {
      expect(appController.getFoo()).toBe('foo');
    });

    it('should return "bar"', () => {
      expect(appController.getbar()).toBe('bar');
    });

    it('should return "baz"', () => {
      expect(appController.getbaz()).toBe('baz');
    });
  });
});
