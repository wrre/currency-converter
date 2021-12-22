import { Controller, Get, Query } from '@nestjs/common';
import { CurrencyConverterService } from './currency-converter.service';
import { ConvertCurrencyQueryDTO } from './dto/currency-converter.controller.dto';
import { ConvertCurrencyAO } from './ao/currency-converter.controller.ao';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('currency-converter')
@Controller('currency-converter')
export class CurrencyConverterController {
  constructor(
    private readonly currencyConverterService: CurrencyConverterService,
  ) {}

  @ApiOperation({ summary: '轉換貨幣' })
  @ApiOkResponse({ type: ConvertCurrencyAO })
  @Get('converted-currency')
  async convertCurrency(
    @Query() query: ConvertCurrencyQueryDTO,
  ): Promise<ConvertCurrencyAO> {
    const toAmount = await this.currencyConverterService.convertCurrency(query);

    return { toAmount };
  }
}
