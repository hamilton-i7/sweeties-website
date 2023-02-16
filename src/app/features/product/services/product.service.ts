import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { PATH_PRODUCTS } from '../../../core/constants/product';
import { productConverter } from '../../../core/converters/product';
import { Product } from '../../../core/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: Firestore) {}

  getProducts(): Observable<Product[]> {
    const ref = collection(this.firestore, PATH_PRODUCTS).withConverter(
      productConverter
    );
    return collectionData(ref, { idField: 'id' });
  }
}
