import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 constructor( private afs: AngularFirestore ) { }

  createProduct( prodcut ) {

  }

  showProductId( uid: string) {

  }

  listProducts() {

  }

  updateProduct( product) {

  }

  deleteProduct( uid: string ) {

  }

  createCategory() {

  }

  listCategories() {

  }

  updateCategory() {

  }
}
