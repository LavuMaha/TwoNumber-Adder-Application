import { Controller, Param, Get, ParseIntPipe } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { ResultDto } from './result.dto';

@Controller('operations')
export class OperationsController {
constructor(private operationsService:OperationsService) {}
@Get('add_ten/:number_param')
async addTen(
  @Param('number_param', ParseIntPipe) numberParam: number,
):Promise<ResultDto> {
    return this.operationsService.addTen(numberParam);
}

@Get('adder/:number_param_one/:number_param_two')
async adder(
  @Param('number_param_one', ParseIntPipe) numberParamOne: number,
  @Param('number_param_two', ParseIntPipe) numberParamTwo: number,
  ):Promise<ResultDto> {
    return this.operationsService.adder(numberParamOne, numberParamTwo);
  }

}
