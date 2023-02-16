import { Category } from './category';

export interface IProduct {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly price?: string;
  readonly recommended: boolean;
  readonly category: Category;
  readonly imgPath: string;
  readonly imgUrl: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
