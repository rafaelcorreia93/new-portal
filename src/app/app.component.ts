import { Component } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-portal';
  status = 'ONLINE';
  isConnected = true;
  showBanner = false;

  constructor(private connectionService: ConnectionService) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = "ONLINE";
        setTimeout(() => {
          this.showBanner = true;
        }, 3000);
      }
      else {
        this.status = "OFFLINE";
        setTimeout(() => {
          this.showBanner = true;
        }, 3000);
      }
      this.showBanner = false;
    })
  }
}
