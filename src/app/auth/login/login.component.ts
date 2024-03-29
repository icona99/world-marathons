import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

 
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {}
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm  = this.fb.group({
      email: ['', [Validators.required, Validators.email]
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
 

  

  login() {
    try {
      if (this.loginForm.valid) {
        this.authService.login(this.loginForm.value.email.trim(), this.loginForm.value.password.trim()).subscribe({
          next: (response)=>{
            console.log('Login successful', response);
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.error('Login failed', error);
          }
        });
      } else {
        console.log('Form is not valid');
      }
    } catch (error) {
      console.error('An error occurred during login', error);
    }
  }
  

}
