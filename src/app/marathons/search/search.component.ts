import { Component, EventEmitter, Output } from '@angular/core';
import { MarathonsService } from '../marathons.service';
import { Marathon } from 'src/app/types/Marathon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();
  searchMarathon: string = '';
  marathons: Marathon[] = [];
  searched: boolean = false;

  constructor(private marathonsService: MarathonsService, private router: Router) { }

  search(): void {
    const trimmedSearch = this.searchMarathon.trim();
    if (trimmedSearch.length === 0) {
      this.searched = true;
      this.marathons = [];
      return;
    }

    this.searched = true;
    this.marathonsService.searchMarathonsByName(trimmedSearch).subscribe(
      (data: Marathon[]) => {
        this.marathons = data;
        this.searchEvent.emit(this.searchMarathon);
      },
      (error) => {
        console.error('Error searching marathons:', error);
      }
    );
  }

  showDetails(marathonId: string): void {
    this.router.navigate(['/marathons/details', marathonId]);
  }

}


