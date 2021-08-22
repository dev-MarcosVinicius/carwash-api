import { Module } from '@nestjs/common';
import { WashService } from '../services/wash.service';
import { WashController } from '../controllers/wash.controller';

@Module({
  controllers: [WashController],
  providers: [WashService]
})
export class WashModule {}
