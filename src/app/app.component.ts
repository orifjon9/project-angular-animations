import {
  Component,
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  group
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
      transition('normal <=> highlighted', animate(1000))
      // transition('highlighted => normal', animate(300))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0px) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(700)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translate(-100px)'
        }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({
          opacity: 0,
          transform: 'translate(100px)'
        }))
      ])
    ]),
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translate(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translate(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translate(-20px)',
            opacity: 1,
            offset: .8
          }),
          style({
            transform: 'translate(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([animate(300, style({
          color: 'red'
        })),
        animate(500, style({
          opacity: 0,
          transform: 'translate(100px)'
        }))])
      ])
    ])
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    const index = this.list.findIndex(f => f === item);
    this.list.splice(index, 1);
  }

  animationStart(event) {
    console.log(event);
  }

  animationFinish(event) {
    console.log(event);
  }
}
