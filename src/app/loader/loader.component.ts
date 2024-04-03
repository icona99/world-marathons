import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pulseAnimation } from '../pulse.animation';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  animations: [pulseAnimation] 
})
export class LoaderComponent implements OnInit {
  @Input() loading: boolean = false;
  public stateName: string = 'normal'; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false; 
      this.stateName = 'normal'; 
      this.router.navigate(['/home']);
    }, 2000); 
  }
}


