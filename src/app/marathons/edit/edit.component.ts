import { Component, OnInit } from '@angular/core';
import { MarathonsService } from '../marathons.service';
import { Marathon } from 'src/app/types/Marathon';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  marathon: Marathon | undefined;
  marathonId: string | null = null;

  constructor(private marathonsService: MarathonsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.marathonId = id ?? null;
    if (this.marathonId) {
      this.marathonsService.getMarathonById(this.marathonId).subscribe((marathon: Marathon) => {
        this.marathon = marathon;
      }, (error: any) => {
        console.error(error);
      });
    }
  }


  saveChanges(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const formData = form.value;
    if (
      formData.name.trim() === '' ||
      formData.location.trim() === '' ||
      formData.image.trim() === '' ||
      formData.date.trim() === '' ||
      formData.description.trim() === ''
    ) {
      return;
    }

    const editedMarathon: Marathon = {
      _id: this.marathonId ?? '',
      name: formData.name,
      location: formData.location,
      image: formData.image,
      date: formData.date,
      description: formData.description
    };



    this.marathonsService.editMarathon(editedMarathon).subscribe((editedMarathon: Marathon) => {
      this.router.navigate(['/marathons/details', editedMarathon._id]);
    }, (error: any) => {
      console.error(error);
    });
  }


}
