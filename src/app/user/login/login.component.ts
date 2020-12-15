import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errorMessage = '';

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      login: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitFormHandler(){

    const data = this.form.value;

    const user = JSON.stringify(data);

    this.errorMessage = '';

    this.authService.login(user).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    });


  }
}
