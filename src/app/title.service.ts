import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  data;

  constructor() { }

  storeData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
