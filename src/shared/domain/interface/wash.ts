import { ObjectId } from 'mongoose';

export interface WashInterface {
    owner: ObjectId;
    client: ObjectId;
    status: boolean;
    price: number;
  }
  