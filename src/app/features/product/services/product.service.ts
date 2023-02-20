import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, FirestoreError } from '@firebase/firestore';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { PATH_PRODUCTS } from '../../../core/constants/product';
import { productConverter } from '../../../core/converters/product';
import { IProduct } from '../../../core/models/product';
import { RequestState } from '../../../core/utils/request';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: Firestore) {}

  getProducts(): Observable<RequestState<IProduct[]>> {
    const ref = collection(this.firestore, PATH_PRODUCTS).withConverter(
      productConverter
    );
    return collectionData(ref, { idField: 'id' }).pipe(
      map((products) => ({ loading: false, value: products })),
      catchError(this.handleError<IProduct[]>('getProducts', [])),
      startWith({ loading: true })
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: FirestoreError): Observable<RequestState<T>> => {
      console.error(`${operation} failed: ${error.message}`);
      return of({ loading: false, error, value: result as T });
    };
  }
}
