import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-random-anime-fact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-anime-fact.component.html',
  styleUrls: ['./random-anime-fact.component.scss'],
})
export class RandomAnimeFactComponent {
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiService.getAnimeFacts().subscribe((res) => [console.log(res)]);
  }
}
