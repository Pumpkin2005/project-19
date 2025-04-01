import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

interface User {
  email: string;
  password: string;
  nickname?: string;
}
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink, HttpClientModule, CommonModule, ReactiveFormsModule],
  providers: [ApiService],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  isRegistration: boolean = true;
  loggedIn: boolean = false;
  users: User[] = [];
  user: User = { email: '', password: '', nickname: '' };

  private fb = inject(FormBuilder);
  private router = inject(Router);

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      nickname: [''],
    });

    this.loadUsers();
  }

  toggleLoginView() {
    this.isRegistration = !this.isRegistration;
  }

  loadUsers() {
    this.apiService.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('Помилка отримання користувачів', err),
    });
  }

  // Реєстрація користувача
  registerUser() {
    if (this.registrationForm.invalid) {
      alert('Будь ласка, заповніть всі поля правильно.');
      return;
    }

    const newUser = {
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
      nickname: this.registrationForm.value.nickname
    };

    console.log('Відправка нового користувача:', newUser); // Дебаг

    this.apiService.postUser(newUser).subscribe({
      next: (response) => {
        console.log('Успішна відповідь від сервера:', response);
        alert('Користувач успішно зареєстрований!');
        this.users.push(response);
        this.registrationForm.reset();
        this.isRegistration = true;
      },
      error: (err) => {
        console.error('Помилка реєстрації:', err);
        alert('Помилка реєстрації, спробуйте ще раз!');
      },
    });
  }

  login() {
    const { email, password } = this.registrationForm.value;

    const foundUser = this.users.find((user: User) =>
      user.email === email && user.password === password
    );

    if (foundUser) {
      alert(`Ласкаво просимо, ${foundUser.nickname || 'користувач'}!`);
      this.loggedIn = true;
      this.router.navigate(['/home']);
    } else {
      alert('Невірний email або пароль!');
    }
  }
}
