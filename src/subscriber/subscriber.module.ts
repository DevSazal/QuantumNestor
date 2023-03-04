import { Module } from '@nestjs/common';
import { SubscriberController } from './subscriber.controller';
import { SubscriberService } from './subscriber.service';

@Module({
  controllers: [SubscriberController],
  providers: [SubscriberService],
})
export class SubscriberModule {}
