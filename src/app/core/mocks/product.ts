import { Category } from '../models/category';
import { IProduct } from '../models/product';

export const dummyProducts: IProduct[] = [
  {
    id: '0',
    name: 'Batido de fresa',
    description: 'Vaso 16 oz.',
    price: '3.25',
    recommended: true,
    category: Category.SHAKES,
    imgPath: 'products/batido-fresa.png',
    imgUrl: 'http://localhost:9876/batido-fresa.png',
    createdAt: new Date('2021-07-09'),
    updatedAt: new Date('2021-07-09'),
  },
  {
    id: '0',
    name: 'Batido de chocolate',
    description: 'Vaso 16 oz.',
    price: '3.25',
    recommended: false,
    category: Category.SHAKES,
    imgPath: 'products/batido-chocolate.png',
    imgUrl: 'http://localhost:9876/batido-chocolate.png',
    createdAt: new Date('2021-07-09'),
    updatedAt: new Date('2021-07-09'),
  },
];
