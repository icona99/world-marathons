import { Component, OnInit } from '@angular/core';
import { MarathonsService } from '../marathons.service';
import { Marathon } from 'src/app/types/Marathon';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  marathons: Marathon[] = [];

  constructor(private marathonsService: MarathonsService) { }

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
