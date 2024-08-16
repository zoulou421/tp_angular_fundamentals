import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fb=inject(FormBuilder);
  http=inject(HttpClient);
  router=inject(Router);

  form=this.fb.nonNullable.group({
    email:['',Validators.required],
    password:['',Validators.required],
  });

onSubmit():void{
  console.log('login');
}

}
