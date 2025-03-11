import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {NgForOf} from "@angular/common";
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
  fb = inject(FormBuilder);
  registrationForm !: FormGroup;
  isRegistration: boolean = true;
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

  }
  /*reset() {
    // Reset errors for all form controls
    this.registrationForm.controls['email'].setErrors(null);
    this.registrationForm.controls['password'].setErrors(null);
    this.registrationForm.controls['nickname'].setErrors(null);
  }*/
  login()
  {
    console.log(this.registrationForm.value);
  }
  data: any;

  constructor(private apiService: ApiService) {}

  sendData() {
    const newItem = {name: 'Новий елемент', description: 'Опис елементу'};
    this.apiService.postData('items', newItem).subscribe({
      next: (res) => console.log('Дані успішно надіслані:', res),
      error: (err) => console.error('Помилка надсилання даних:', err)
    });
  }
}
