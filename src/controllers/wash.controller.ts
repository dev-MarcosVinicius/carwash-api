import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WashService } from '../services/wash.service';
import { CreateWashDto } from '../shared/domain/dto/create-wash.dto';

@Controller('wash')
export class WashController {
  constructor(private readonly washService: WashService) {}

  @Post()
  create(@Body() createWashDto: CreateWashDto) {
    return this.washService.create(createWashDto);
  }

  @Get()
  findAll() {
    return this.washService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.washService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWashDto: CreateWashDto) {
    return this.washService.update(+id, updateWashDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.washService.remove(+id);
  }
}
