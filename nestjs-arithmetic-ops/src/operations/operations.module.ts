import { Module } from '@nestjs/common';
import { OperationsController } from './src/operations.controller';
import { OperationsService } from './src/operations.service';

@Module({
  controllers: [OperationsController],
  providers: [OperationsService],
})
export class OperationsModule {


}
