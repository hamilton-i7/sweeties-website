import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, FirestoreError } from '@firebase/firestore';
import { catchError, Observable, of } from 'rxjs';
import { PATH_PRODUCTS } from '../../../core/constants/product';
import { productConverter } from '../../../core/converters/product';
import { IProduct } from '../../../core/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: Firestore) {}

  getProducts(): Observable<IProduct[]> {
    const ref = collection(this.firestore, PATH_PRODUCTS).withConverter(
      productConverter
    );
    return collectionData(ref, { idField: 'id' }).pipe(
      catchError(this.handleError<IProduct[]>('getProducts', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: FirestoreError): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
