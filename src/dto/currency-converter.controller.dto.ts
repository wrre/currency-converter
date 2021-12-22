import { CurrencyEnum } from '../enum/currency.enum';
import { IsEnum, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ConvertCurrencyQueryDTO {
  @ApiProperty({
    description: '金額數字',
    example: '1',
  })
  @IsNumberString()
  fromAmount: string;

  @ApiProperty({
    description: '來源幣別',
    example: CurrencyEnum.TWD,
    enum: CurrencyEnum,
  })
  @IsEnum(CurrencyEnum)
  fromCurrency: CurrencyEnum;

  @ApiProperty({
    description: '目標幣別',
    example: CurrencyEnum.USD,
    enum: CurrencyEnum,
  })
  @IsEnum(CurrencyEnum)
  toCurrency: CurrencyEnum;
}
