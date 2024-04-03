import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/shared/validators/passwordsmatching';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/shared/email-validator';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator()]],
    passGroup: this.fb.group({
      password: ['', [Validators.required,Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required]]
    },
      {
        validators: [passwordMatchValidator('password', 'repeatPassword')]
      })
  });

  get passGroup(){
    return this.form.get('passGroup');
  };

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  register(): void {
    if (this.form.invalid) {
      return;
    };

    const { username, email, passGroup: { password, repeatPassword } = {} } = this.form.value;

    this.authService
      .register(username!, email!, password!)
      .subscribe(() => {
        this.router.navigate(['/'])
      });
  }
} 
