import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: TitleService, router: ActivatedRoute) { 
    const title = router.snapshot.data['title'];
    this.titleService.storeData(title);
  }

  ngOnInit(): void {
  }

}
