import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MarathonsService } from '../marathons.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private marathonsService: MarathonsService, private router: Router) { }

  create(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { name, location, image, date, description } = form.value;
    this.marathonsService.create(name, location, image, date, description)
      .subscribe(() => {
        this.router.navigate(['/catalog']);
        form.reset()
      });
  }
}
