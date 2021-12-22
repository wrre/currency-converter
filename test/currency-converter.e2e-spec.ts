import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CurrencyConverterModule } from '../src/currency-converter.module';
import { ConvertCurrencyQueryDTO } from '../src/dto/currency-converter.controller.dto';
import { CurrencyEnum } from '../src/enum/currency.enum';

describe('CurrencyConverterController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CurrencyConverterModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/currency-converter/converted-currency (GET)', () => {
    it('200', () => {
      const query: ConvertCurrencyQueryDTO = {
        fromAmount: '100',
        fromCurrency: CurrencyEnum.TWD,
        toCurrency: CurrencyEnum.TWD,
      };
      return request(app.getHttpServer())
        .get('/currency-converter/converted-currency')
        .query(query)
        .expect(200)
        .expect({ toAmount: '100.00' });
    });

    it('200 with thousands commas', () => {
      const query: ConvertCurrencyQueryDTO = {
        fromAmount: '1000',
        fromCurrency: CurrencyEnum.TWD,
        toCurrency: CurrencyEnum.TWD,
      };
      return request(app.getHttpServer())
        .get('/currency-converter/converted-currency')
        .query(query)
        .expect(200)
        .expect({ toAmount: '1,000.00' });
    });
  });
});
