// error.component.ts
import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage = '';

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.errorService.error$.subscribe((err: any) => {
      this.errorMessage = err?.message || '';
      setTimeout(() => {
        this.closeError();
      }, 5000); // Затваряне на грешката след 5 секунди
    });
  }

  closeError(): void {
    this.errorMessage = '';
  }
}
