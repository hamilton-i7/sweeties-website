import * as dayjs from 'dayjs';
import { Product } from '../models/product';

export function isNewProduct(product: Product): boolean {
  const createdDate = dayjs(product.createdAt);
  const monthOldDate = dayjs(new Date()).subtract(1, 'month');

  return createdDate.isAfter(monthOldDate);
}
