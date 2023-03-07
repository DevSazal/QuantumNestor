import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubscriberDTO } from './dto';
import { Subscriber, SubscriberDocument } from './schemas/subscriber.schema';

@Injectable()
export class SubscriberService {
  constructor(
    @InjectModel(Subscriber.name)
    private subscriberModel: Model<SubscriberDocument>,
  ) {}

  async create(dto: SubscriberDTO): Promise<SubscriberDocument> {
    const subscriber = await this.subscriberModel.create(dto);
    if (!subscriber) throw new NotFoundException(`failed to create subscriber!`);
    return subscriber;
  }

  async readBatch(): Promise<SubscriberDocument[]> {
    return await this.subscriberModel.find().exec();
  }

  async read(id: string): Promise<SubscriberDocument> {
    const subscriber = await this.subscriberModel.findById(id);
    if (!subscriber) throw new NotFoundException(`subscriber not found!`);
    return subscriber;
  }
}
