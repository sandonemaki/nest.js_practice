export interface Item {
  id: string;
  name: string;
  price: number;
  description?: string;
  status: 'ON_SALE' | 'OUT_OF_STOCK';
}
