import { Injectable } from '@nestjs/common';
import { CreateWashDto } from '../shared/domain/dto/create-wash.dto';

@Injectable()
export class WashService {
  create(createWashDto: CreateWashDto) {
    return 'This action adds a new wash';
  }

  findAll() {
    return `This action returns all wash`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wash`;
  }

  update(id: number, updateWashDto: CreateWashDto) {
    return `This action updates a #${id} wash`;
  }

  remove(id: number) {
    return `This action removes a #${id} wash`;
  }
}
