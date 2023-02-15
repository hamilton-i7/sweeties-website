import { Category } from './category';
import { v4 as uuidv4 } from 'uuid';

export class Product {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly price: string;
  readonly recommended: boolean;
  readonly category: Category;
  readonly imgPath: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(
    id: string = uuidv4(),
    name: string,
    price: string,
    recommended = false,
    category: Category,
    imgPath: string,
    description?: string,
    createdAt = new Date(),
    updatedAt = new Date()
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.recommended = recommended;
    this.category = category;
    this.imgPath = imgPath;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
