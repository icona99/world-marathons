import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';
import { Router } from '@angular/router';
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

  constructor(private errorService: ErrorService, private router: Router) { }

  ngOnInit(): void {
    this.errorService.error$.subscribe((err: any) => {
      this.errorMessage = err?.message || '';
      this.displayError = true;
      this.triggerAnimation();
      setTimeout(() => {
        this.displayError = false;
        if (err.status === 401) {
          this.router.navigate(['/auth/login']);
        } else if (err.status === 403) {
          this.router.navigate(['/auth/login']);
        } else if (err.status === 404) {
          this.router.navigate(['/not-found']);
        } else if (err.status === 500 || err.status === 503) {
          this.errorMessage = 'An internal server error occurred. Please try again later.';
          this.router.navigate(['/error']);
        }
        else {
          this.router.navigate(['/error']);
        }
      }, 5000);
    });
  }

  triggerAnimation() {
    this.animationState = this.animationState === 'initial' ? 'final' : 'initial';
  }
}

