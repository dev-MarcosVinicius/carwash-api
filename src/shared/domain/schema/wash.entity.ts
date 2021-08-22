import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { WashInterface } from '../interface/wash';

export type WashDocument = Wash & Document;

@Schema()
export class Wash {
  @Prop({})
  _id;

  @Prop({})
  wash: WashInterface;
}

export const WashSchema =
  SchemaFactory.createForClass(Wash);
