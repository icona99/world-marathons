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
    this.marathonId = id ?? null; // използваме оператора ?? за задаване на null, ако id е null или undefined
    if (this.marathonId) {
      this.marathonsService.getMarathonById(this.marathonId).subscribe((marathon: Marathon) => {
         this.marathon = marathon;
      }, (error: any) => {
        console.error(error);
      });
    }
  }
  

  saveChanges(form: NgForm): void {
    console.log("Marathon ID:", this.marathonId)
    if (form.invalid) {
      return;
    }
  
    const formData = form.value; 
    const editedMarathon: Marathon = {
      _id: this.marathonId ?? '', // ако marathonId е null, задайте празен низ или друга подходяща стойност
      name: formData.name,
      location: formData.location,
      image: formData.image,
      date: formData.date,
      description: formData.description
    };
  
    this.marathonsService.editMarathon(editedMarathon).subscribe((editedMarathon: Marathon) => {
      console.log("Marathon edited:", editedMarathon); 
      this.router.navigate(['/marathons/details', editedMarathon._id]); // използвайте _id на редактирания маратон, а не this.marathon?._id
    }, (error: any) => {
      console.error(error);
    });
  }
  
  
}
