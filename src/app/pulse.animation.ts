import { trigger, state, style, animate, transition } from '@angular/animations';

export const pulseAnimation = trigger('pulse', [
  state('normal', style({
    transform: 'scale(1)',
    opacity: 0.8
  })),
  state('pulse', style({
    transform: 'scale(1.1)',
    opacity: 1
  })),
  transition('normal <=> pulse', animate('0.8s ease-in-out'))
]);
