import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { AttackOnTitanComponent } from './attack-on-titan/attack-on-titan.component';

@Component({
  selector: 'app-animeProjects',
  standalone: true,
  imports: [CommonModule, AttackOnTitanComponent],
  templateUrl: './animeProjects.component.html',
  styleUrls: ['./animeProjects.component.scss'],
})
export class AnimeProjects implements OnInit {
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiService.getAnimeQuotes().subscribe((res) => [console.log(res)]);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
