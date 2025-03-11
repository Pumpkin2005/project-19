import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { MainComponent } from './main/main.component';
import {RegistrationComponent} from "./registration/registration.component";
import {HomeComponent} from "./home/home.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeadComponent, MainComponent, CommonModule, RegistrationComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project19';
/*  public languages: any[] = [
    {name: 'English'},
    {name: 'French'},
    {name: 'Spanish'},
    {name: 'German'},
    {name: 'Arabic'},
    ]*/

 /* toggleLanguages() {
    this.showLanguages = !this.showLanguages;
  }*/
}
