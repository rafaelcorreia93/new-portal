import { Component, OnInit } from '@angular/core';
import { RouterOutlet, NavigationEnd } from '@angular/router';
import { slider } from '../_animations/animations';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  animations: [ 
    slider
  ]
})
export class DefaultLayoutComponent implements OnInit {

  rota;

  constructor() {

  }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    if (outlet && outlet.activatedRouteData) {
      return outlet.activatedRouteData['animation'];
    }
  }

}
