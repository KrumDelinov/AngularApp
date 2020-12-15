import { Router } from '@angular/router';
import { TeacherService } from './../teacher.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {


  form: FormGroup;
  errorMessage = '';

  constructor(private teacerService: TeacherService, private fb: FormBuilder, private router: Router) {

    this.form = this.fb.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  submitHandler(): void {

    const data = this.form.value;
    const student = JSON.stringify(data);

    this.teacerService.addStudent(student)
      .subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        }
      });
  }
}
