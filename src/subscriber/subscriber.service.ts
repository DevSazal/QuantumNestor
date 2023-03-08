import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubscriberDTO, PartialSubscriberDTO } from './dto';
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

  async update(id: string, dto: PartialSubscriberDTO): Promise<SubscriberDocument> {
    const { _id } = await this.read(id);
    const subscriber = await this.subscriberModel.findByIdAndUpdate(_id, dto, {
      new: true,
    });

    if (!subscriber) throw new NotFoundException(`failed to update subscriber!`);
    return subscriber;
  }

  async delete(id: string): Promise<HttpException> {
    const subscriber = await this.subscriberModel.findByIdAndDelete(id);
    if (!subscriber) throw new NotFoundException(`failed to delete subscriber!`);
    throw new HttpException('The data has been deleted successfully', HttpStatus.OK);
  }
}
