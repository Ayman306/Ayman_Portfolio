import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  providers: [ApiService],
})
export class PageComponent {
  constructor(private apiService: ApiService) {}
  jokeApiSub: any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.jokeApiSub = this.apiService
      .gimmeJoke()
      .subscribe((res) => console.log(res));
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log(this.jokeApiSub);

    this.jokeApiSub.unsubscribe();
    console.log(this.jokeApiSub);
  }
}
