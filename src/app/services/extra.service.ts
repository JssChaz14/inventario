import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ExtraService {

  constructor( private afs: AngularFirestore ) { }

  extraLiberacion( data: any ) {
    let uid = this.afs.createId();
    return this.afs.collection('extra-liberacion').doc(uid).set({uid, ...data});.3
  }
}
