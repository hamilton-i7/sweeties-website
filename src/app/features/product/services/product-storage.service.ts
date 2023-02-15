import { Injectable } from '@angular/core';
import { listAll, Storage } from '@angular/fire/storage';
import { ref, StorageReference } from '@firebase/storage';
import { PATH_STORAGE_PRODUCTS } from '../../../core/constants/product';
import { Category } from '../../../core/models/category';

@Injectable({
  providedIn: 'root',
})
export class ProductStorageService {
  constructor(private storage: Storage) {}

  async getImages(): Promise<StorageReference[]> {
    const paths = this.getPaths();
    const refs = this.getRefs(paths);
    const images: StorageReference[] = [];

    const results = await Promise.allSettled(refs.map((ref) => listAll(ref)));
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        images.push(...result.value.items);
      }
    });

    return images;
  }

  private getPaths(): string[] {
    const paths: string[] = [];
    Object.values(Category).forEach((category) => {
      paths.push(`${PATH_STORAGE_PRODUCTS}/${category}`);
    });

    return paths;
  }

  private getRefs(paths: string[]): StorageReference[] {
    const refs: StorageReference[] = [];
    paths.forEach((path) => {
      refs.push(ref(this.storage, path));
    });

    return refs;
  }
}
