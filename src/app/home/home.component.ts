import { Component, OnInit } from '@angular/core';
import { MarathonsService } from '../marathons/marathons.service';
import { Router } from '@angular/router';
import { Marathon } from '../types/Marathon';

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
}
