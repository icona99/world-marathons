import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  animations: [
    trigger('heartbeat', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('final', style({
        transform: 'scale(1.1)'
      })),
      transition('initial<=>final', animate('1000ms ease-in-out'))
    ])
  ]
})
export class ErrorComponent implements OnInit {
  errorMessage = '';
  displayError = false;
  animationState = 'initial';

  constructor(private errorService: ErrorService) { }
  ngOnInit(): void {
    this.errorService.error$.subscribe((err: any) => {
      this.errorMessage = err?.message || '';
      this.displayError = true;
      this.triggerAnimation();
      setTimeout(() => {
        this.displayError = false;
      }, 6000);
    });
  };

  triggerAnimation() {
    this.animationState = this.animationState === 'initial' ? 'final' : 'initial';
  };
}
