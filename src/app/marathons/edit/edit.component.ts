import { Component, OnInit } from '@angular/core';
import { MarathonsService } from '../marathons.service';
import { Marathon } from 'src/app/types/Marathon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  marathon: Marathon |undefined;
  marathonId: string | null = null;
  constructor(private marathonsService: MarathonsService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.marathonsService.getMarathonById(id).subscribe((marathon: any) => {
         this.marathon = marathon;
      }, (error: any) => {
        console.error( error);
      });
    }
  }
  saveChanges(): void {
    if (this.marathon) {
      this.marathonsService.editMarathon(this.marathon).subscribe((editedMarathon: Marathon) => {
        this.router.navigate(['/marathons/details', this.marathon?._id]); // Редирект до страницата за детайли
      }, (error: any) => {
        console.error( error);
      });
    }
  }
  
}
  

