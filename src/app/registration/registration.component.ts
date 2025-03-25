import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink, HttpClientModule, CommonModule, ReactiveFormsModule],
  providers: [ApiService],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit{
  user = {
    nickname: '',
    email: '',
  };
  fb = inject(FormBuilder);
  registrationForm !: FormGroup;
  isRegistration: boolean = true;
  users: any[] = [];

  constructor(private apiService: ApiService) {}
  public Registration: any[] = [
    {
      password: "Password",
      email: "Email"

    },
  ];
  public Regist: string[] = [

  ];
  toggleLoginView() {
    this.isRegistration = !this.isRegistration;
  }
  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      email:['',Validators.compose([Validators.required, Validators.email])],
      password:['',Validators.required],
      nickname:['',Validators.required]
    })
    this.apiService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error when receiving data', err);
      },
    });
  }
  registerUser() {
    this.apiService.postUser(this.user).subscribe({
      next: (response) => {
        alert('User successfully registered!');
        console.log(response);
      },
      error: (error) => {
        alert('Registration error!');
        console.error(error);
      },
    });
  }
  reset() {
    // Reset errors for all form controls
    this.registrationForm.controls['email'].setErrors(null);
    this.registrationForm.controls['password'].setErrors(null);
    this.registrationForm.controls['nickname'].setErrors(null);
  }
  login()
  {
    console.log(this.registrationForm.value);
  }
  data: any;

}
