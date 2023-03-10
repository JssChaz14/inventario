import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ExtraFree } from './../../models/extra-free.interface';

export interface Item { name: string; }

@Component({
  selector: 'app-free-report',
  templateUrl: './free-report.component.html',
  styleUrls: ['./free-report.component.css']
})
export class FreeReportComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<ExtraFree>;
  items: Observable<ExtraFree[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<ExtraFree>('extra-liberacion');
    this.items = this.itemsCollection.valueChanges();
  }

  

  ngOnInit(): void {
  }

}
