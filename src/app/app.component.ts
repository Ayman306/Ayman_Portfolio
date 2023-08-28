import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from './Pages/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './Pages/footer/footer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FontAwesomeModule,FooterComponent],
})
export class AppComponent implements OnInit {
  title = 'Ayman_portfolio';
  constructor(private route: ActivatedRoute) {}
  hideHeader = false;

  ngOnInit(): void {
    console.log('ngOnInit');
    this.route.paramMap.subscribe(params => {
      const routeParam = params.get('routeParam'); // Replace 'routeParam' with your actual route parameter name
      // Check if the routeParam matches the value you want to hide the header for
      this.hideHeader = routeParam === 'Pexels'; // Replace 'Pexels' with your desired value
    });
  }
}
