import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-free-report',
  templateUrl: './free-report.component.html',
  styleUrls: ['./free-report.component.css']
})
export class FreeReportComponent implements OnInit {

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('extra-liberacion').valueChanges();
  }

  

  ngOnInit(): void {
  }

}
