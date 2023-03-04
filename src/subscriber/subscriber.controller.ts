import { Body, Controller, Get, Post } from '@nestjs/common';
import { SubscriberDTO } from './dto';
import { SubscriberService } from './subscriber.service';

@Controller('subscribers')
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  @Get()
  getSubscriber(): object {
    return this.subscriberService.getSubscriber();
  }

  @Post()
  postSubscriber(@Body() dto: SubscriberDTO): object {
    // console.log(dto);
    return this.subscriberService.postSubscriber(dto);
  }
}
