import { CurrencyEnum } from '../enum/currency.enum';

export class ConvertCurrencyDTO {
  fromAmount: string;

  fromCurrency: CurrencyEnum;

  toCurrency: CurrencyEnum;
}
