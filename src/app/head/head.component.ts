import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {
  showSkills = true; // Початкове значення true

  toggleTab() {
    this.showSkills = !this.showSkills;
    console.log('showSkills:', this.showSkills);
  }
  public skills: any[] = [
    {name: 'Adobe Photoshop'},
    {name: 'Adobe Illustrator'},
    {name: 'Microsoft Word'},
    {name: 'Microsoft PowerPoint'},
    {name: 'HTML5/CSS3'},
  ]
  public hobbies: any[] = [
    {name: 'Book Reading'},
    {name: 'Traveling'},
    {name: 'Playing Chess'},
    {name: 'Graphic Design'},
    {name: 'Painting'},
  ]
}
