import { Component, OnInit } from '@angular/core';
import { Marathon } from '../types/Marathon';
import { MarathonsService } from '../marathons/marathons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  marathons: Marathon[] = [];

  constructor(private marathonsService: MarathonsService,private router:Router) { }

  ngOnInit(): void {
    this.fetchMarathons();
  }

  fetchMarathons(): void {
    this.marathonsService.getAllMarathons().subscribe(
      (data: Marathon[]) => {
        this.marathons = data;
      },
      (error) => {
        console.error('Error fetching marathons:', error);
      }
    );
  }
  showDetails(marathonId: string): void {
    this.router.navigate(['/marathons/details', marathonId]);
}
}
