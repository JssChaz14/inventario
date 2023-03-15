import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderTecService {

  constructor() { }

  addProvider( providerData: [] ) {
    console.log(providerData)

  }

  listProviders() {

  }

  updateProviders( uid: string, data: [] ){

  }
}
