import { ApiProperty } from '@nestjs/swagger';

export class ConvertCurrencyAO {
  @ApiProperty({
    description: '轉換幣別後的金額數字',
    example: '0.03281',
  })
  toAmount: string;
}
