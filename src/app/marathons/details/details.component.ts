import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarathonsService } from '../marathons.service';
import { Marathon } from 'src/app/types/Marathon';
import { CutTextPipe } from 'src/app/shared/pipes/cut-text.pipe';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  marathonId: string | undefined;
  marathon: Marathon | undefined;
  showFullDesc: boolean = false;

  constructor(private route: ActivatedRoute, private marathonsService: MarathonsService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.marathonId = id;
      this.marathonsService.getMarathonById(this.marathonId).subscribe((marathon: Marathon) => {
        this.marathon = marathon
      });
    }
  };

  deleteMarathon(): void {
    if (this.marathonId) {
      if (confirm('Are you sure you want to delete this marathon?')) {
        this.marathonsService.deleteMarathon(this.marathonId).subscribe(
          () => {
            this.router.navigate(['/marathons/catalog']);
          },
          (error) => {
            console.error('Error deleting marathon:', error);
          }
        );
      }
    } else {
      console.error('Marathon ID is undefined');
    }
  };

  toggleDescription(): void {
    this.showFullDesc = !this.showFullDesc;
  }

}



