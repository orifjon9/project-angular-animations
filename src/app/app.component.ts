import {
  Component,
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal => highlighted', animate(1000)),
      transition('highlighted => normal', animate(300))])
  ]
})
export class AppComponent {
  state = 'highlighted';

  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    const index = this.list.findIndex(f => f === item);
    this.list.splice(index, 1);
  }
}
