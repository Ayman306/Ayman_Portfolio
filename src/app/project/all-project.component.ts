import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeProjects } from './animeProjects/animeProjects.component';

@Component({
  selector: 'app-all-project',
  standalone: true,
  imports: [CommonModule, AnimeProjects],
  templateUrl: './all-project.component.html',
  styleUrls: ['./all-project.component.scss'],
})
export class AllProjectComponent {}
