import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counterApp';
  count = 0;

  increaseCount() {
    this.count += 1;
  }

  decreaseCount() {
    if (this.count != 0)
    this.count -= 1;
  }

  resetCount()  {
    this.count = 0;
  }
}
