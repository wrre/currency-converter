import { Injectable } from '@nestjs/common';
import { ConvertCurrencyDTO } from './dto/currency-converter.service.sto';

@Injectable()
export class CurrencyConverterService {
  async convertCurrency(dto: ConvertCurrencyDTO): Promise<string> {
    // TODO
    return dto.fromAmount;
  }
}
