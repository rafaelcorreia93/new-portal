import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.scss']
})
export class NotificacoesComponent implements OnInit {

  constructor(private titleService: TitleService, router: ActivatedRoute) { 
    const title = router.snapshot.data['title'];
    this.titleService.storeData(title);
  }

  ngOnInit(): void {
  }

}
