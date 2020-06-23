import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { TitleService } from '../title.service';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  rota = '';
  isHome = true;

   constructor(private titleService: TitleService, location: Location, router: Router) {
    router.events.subscribe(val => {
      const rotaData = this.titleService.getData();
      if (rotaData && rotaData.length > 0) {
        this.showTitle(rotaData);
      }
    });
  }

  // ngAfterViewInit(): void {
    
  // }

  showTitle(rota) {
    this.rota = rota;
    if (rota === 'Home') {
      this.isHome = true;
    } else {
      this.isHome = false;
    }
  }

}
