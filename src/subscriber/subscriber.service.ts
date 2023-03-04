import { Injectable } from '@nestjs/common';
import { SubscriberDTO } from './dto';

@Injectable()
export class SubscriberService {
  getSubscriber(): object {
    return { msg: 'Hello World!' };
  }

  postSubscriber(dto: SubscriberDTO): object {
    return { msg: `Hello, ${dto.name}!` };
  }
}
