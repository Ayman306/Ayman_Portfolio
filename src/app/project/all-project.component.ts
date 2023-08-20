import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomAnimeFactComponent } from './random-anime-fact/random-anime-fact.component';

@Component({
  selector: 'app-all-project',
  standalone: true,
  imports: [CommonModule, RandomAnimeFactComponent],
  templateUrl: './all-project.component.html',
  styleUrls: ['./all-project.component.scss'],
})
export class AllProjectComponent {}
