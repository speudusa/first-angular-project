import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  name = 'Willow Frey';
  itemList = ['bagel', 'bread', 'beagles'];
  rectangle = {
    length: 5,
    width: 6,
    area: function () {
      return this.length * this.width;
    }
  }
}
