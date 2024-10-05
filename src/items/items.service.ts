import { Injectable } from '@nestjs/common';
import { Item } from './items.model';
import { CreateItemDto } from './dto/create-item.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  findAll(): Item[] {
    return this.items;
  }

  create(CreateItemDto: CreateItemDto): Item {
    const item: Item = {
      id: uuid(),
      ...CreateItemDto,
      status: 'ON_SALE',
    };

    this.items.push(item);
    return item;
  }

  findById(id: string): Item {
    return this.items.find((item) => item.id === id);
  }

  updateStatus(id: string): Item {
    const item = this.findById(id);
    item.status = 'OUT_OF_STOCK';
    return item;
  }

  delete(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
