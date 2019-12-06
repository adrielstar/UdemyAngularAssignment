import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showBtn: boolean = false;
  showDetails: boolean = false;
  logDetails: string;
  detailsLogs: Array<any> = [];

  constructor() {
    setTimeout(() => {
      this.showBtn = true;
    }, 2000);
  }

  onBtnClick(event) {
    this.showDetails = !this.showDetails;
    this.detailsLogs.push(event.timeStamp);
  }

  getBackgroundColor(i: number): string {
    return i >= 4 ? 'blue' : null;
  }
}
