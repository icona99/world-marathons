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
  public stateName: string = 'normal'; // Дефиниране на stateName като public член

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Симулирано зареждане с setTimeout
    setTimeout(() => {
      this.loading = false; // Зареждането приключи
      this.stateName = 'normal'; // Промяна на статуса на анимацията
      this.router.navigate(['/home']); // Пренасочване към началната страница
    }, 3000); // 3 секунди симулирано зареждане
  }
}


