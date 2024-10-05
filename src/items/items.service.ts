import { Injectable } from '@nestjs/common';
import { Item } from './items.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  findAll(): Item[] {
    return this.items;
  }

  create(item: Item): Item {
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
