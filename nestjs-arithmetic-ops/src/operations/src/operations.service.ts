import { Injectable } from '@nestjs/common';
import { ResultDto } from './result.dto';

@Injectable()
export class OperationsService {
  async addTen(numberParam: number): Promise<ResultDto> {
    return OperationsService.createResultDto(numberParam + 10);
  }

  async adder(numberParamOne: number, numberParamTwo: number): Promise<ResultDto> {
    return OperationsService.createResultDto(numberParamOne + numberParamTwo);
  }

  private static createResultDto(numberParam: number): ResultDto {
    return { sum: numberParam };
  }
}
