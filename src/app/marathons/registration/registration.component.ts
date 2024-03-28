import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarathonsService } from '../marathons.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Marathon } from 'src/app/types/Marathon';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  registrationForm: FormGroup;
  marathonId: string | undefined;
  marathon: Marathon|undefined;

  constructor(private fb: FormBuilder, private marathonsService: MarathonsService, private router: Router,private route:ActivatedRoute) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      raceDistance: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.marathonId = id;
      // Вземете данните за маратона с ID this.marathonId от сервиса
      this.marathonsService.getMarathonById(this.marathonId).subscribe((marathon: Marathon) => {
        this.marathon = marathon;
        // Използвайте данните за маратона в шаблона
      }, (error) => {
        console.error('Error loading marathon:', error);
        // Изведете съобщение за грешка или предприемете други действия
      });
    }
  }

registration() {
  if (this.registrationForm.valid && this.marathon)  {
    // Увеличаване на броя на регистрираните лица локално, без да изпращате заявка за регистрация
    this.marathon.registeredCount++; 

    // След успешна регистрация, навигирайте към детайлната страница на маратона
    this.router.navigate(['/marathons/details' ,this.marathon._id]);
  } else {
    console.error('No valid marathon found for registration.');
  }
}

}
