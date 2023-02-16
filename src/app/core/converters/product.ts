import { FirestoreDataConverter } from '@angular/fire/firestore';
import { IProduct } from '../models/product';

export const productConverter: FirestoreDataConverter<IProduct> = {
  toFirestore: (product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    recommended: product.recommended,
    category: product.category,
    imgPath: product.imgPath,
    imgUrl: product.imgUrl,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  }),
  fromFirestore: (snapshot, options) => {
    const data: any = snapshot.data(options);
    const product: IProduct = {
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      recommended: data.recommended,
      category: data.category,
      imgPath: data.imgPath,
      imgUrl: data.imgUrl,
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt.toDate(),
    };
    return product;
  },
};
