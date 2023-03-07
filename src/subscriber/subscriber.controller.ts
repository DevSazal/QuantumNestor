import { Body, Controller, Param, Get, Post, Put } from '@nestjs/common';
import { SubscriberDTO, PartialSubscriberDTO } from './dto';
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

  @Put(':id')
  putSubscriber(@Param('id') id: string, @Body() dto: PartialSubscriberDTO): object {
    return this.subscriberService.update(id, dto);
  }
}
