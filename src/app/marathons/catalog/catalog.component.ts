import { Component, OnInit } from '@angular/core';
import { MarathonsService } from '../marathons.service';
import { Marathon } from 'src/app/types/Marathon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  marathons: Marathon[] = [];
  loading: boolean = false; 

  constructor(private marathonsService: MarathonsService, private router: Router) { }

  ngOnInit(): void {
    this.fetchMarathons();
  }

  fetchMarathons(): void {
    this.loading = true; 
    this.marathonsService.getAllMarathons().subscribe(
      (data: Marathon[]) => {
        this.marathons = data;
        this.loading = false; 
      },
      (error) => {
        console.error('Error fetching marathons:', error);
        this.loading = false; 
      }
    );
  }

  showDetails(marathonId: string): void {
    this.router.navigate(['/marathons/details', marathonId]);
  }
}
