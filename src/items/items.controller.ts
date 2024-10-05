import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './items.model';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id') // /items/test1
  findById(@Param('id') id: string): Item {
    return this.itemsService.findById(id);
  }

  @Post()
  create(@Body() CreateItemDto: CreateItemDto): Item {
    return this.itemsService.create(CreateItemDto);
  }

  @Put(':id')
  updateStatus(@Param('id') id: string) {
    return this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.itemsService.delete(id);
  }
}
