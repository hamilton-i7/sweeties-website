import { FirestoreDataConverter } from '@angular/fire/firestore';
import { Product } from '../models/product';

export const productConverter: FirestoreDataConverter<Product> = {
  toFirestore: (product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    recommended: product.recommended,
    category: product.category,
    imgPath: product.imgPath,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  }),
  fromFirestore: (snapshot, options) => {
    const data: any = snapshot.data(options);
    return new Product(
      data.id,
      data.name,
      data.price,
      data.recommended,
      data.category,
      data.imgPath,
      data.description,
      data.createdAt.toDate(),
      data.updatedAt.toDate()
    );
  },
};
