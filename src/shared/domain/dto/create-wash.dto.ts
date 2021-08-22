import { ObjectId } from 'mongoose';
import { IsInt, IsBooleanString } from 'class-validator';

export class CreateWashDto {
  readonly owner?: ObjectId;

  readonly client?: ObjectId;
  
  @IsBooleanString({ message: 'status precisa ser boolean' })
  readonly status?: boolean;

  @IsInt({ message: 'price precisa ser number' })
  readonly price?: number;
}