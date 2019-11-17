import {
  trigger, transition,
  style, query,
  group, animateChild,
  animate, keyframes,
  state
} from '@angular/animations';


export const fader =
  trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [
      animate(1500)
    ]),
  ]);

export const changeAtState =
  trigger('stateChange', [
    state('void', style({ opacity: 0 })),
    state('normal', style({ backgroundColor: 'yellow' })),
    state('red', style({ backgroundColor: 'red' })),
    transition('normal <=> red', [
      animate('1000ms ease')
    ]),
    transition('void => *',
      [animate('1500ms ease-in')])
  ]);

