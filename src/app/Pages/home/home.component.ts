import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from '../about/about.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, AboutComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private route:Router) { }
  navigateTo(route:string) {
    const resumeUrl = '../../../assets/resume/Aymanuddin.pdf'; // Replace with the actual URL of your resume
    // Create an anchor element to initiate the download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank'; // Open in a new tab (optional)
    link.download = 'Aymanuddin resume.pdf';
     link.click();
    console.log(link)
        this.route.navigate([`${route}`])

  }

}
