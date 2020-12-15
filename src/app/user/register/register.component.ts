
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;



  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {

    this.form = this.fb.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  onSubmit() {
  }

  submitHandler(): void {

    const data = this.form.value;

    data.role = 'pending';
    const user = JSON.stringify(data);


    this.authService.register(user).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
