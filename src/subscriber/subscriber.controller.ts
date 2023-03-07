import { Body, Controller, Param, Get, Post } from '@nestjs/common';
import { SubscriberDTO } from './dto';
import { SubscriberService } from './subscriber.service';

@Controller('subscribers')
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  @Post()
  postSubscriber(@Body() dto: SubscriberDTO): object {
    return this.subscriberService.create(dto);
  }

  @Get()
  getSubscribers(): object {
    return this.subscriberService.readBatch();
  }

  @Get(':id')
  getSubscriber(@Param('id') id: string): object {
    return this.subscriberService.read(id);
  }
}
