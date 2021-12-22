import { Injectable } from '@nestjs/common';
import { ConvertCurrencyDTO } from './dto/currency-converter.service.sto';
import { CURRENCY_RATE_MAP } from './constants/currency-rate';
import { math } from './util/math';

@Injectable()
export class CurrencyConverterService {
  async convertCurrency(dto: ConvertCurrencyDTO): Promise<string> {
    const rate = CURRENCY_RATE_MAP[dto.fromCurrency][dto.toCurrency];

    return math
      .format(math.evaluate(`${dto.fromAmount} * ${rate}`), {
        notation: 'fixed',
        precision: 2,
      })
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
