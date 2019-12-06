import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails: boolean = false;
  logDetails: string;
  detailsLogs: Array<any> = [];

  constructor() { }

  onToggle() {
    this.showDetails = !this.showDetails;
    this.detailsLogs.push(new Date());
  }

  getBackgroundColor(i: number): string {
    return i >= 4 ? 'blue' : 'transparent';
  }
}
