import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import { CommonModule } from '@angular/common';
import { HeadComponent } from  '../head/head.component';
import { MainComponent } from '../main/main.component';
@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        HeadComponent,
        MainComponent,
        NgForOf,
        RouterLink
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public languages: any[] = [
    {name: 'English'},
    {name: 'French'},
    {name: 'Spanish'},
    {name: 'German'},
    {name: 'Arabic'},
  ]
}
