import { Module } from '@nestjs/common';
import { SubscriberModule } from './subscriber/subscriber.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sazal:DRnCreblUGfJmYX5@sazal-cluster0.yv3sqxo.mongodb.net/test?retryWrites=true&w=majority',
    ),
    SubscriberModule,
  ],
})
export class AppModule {}
