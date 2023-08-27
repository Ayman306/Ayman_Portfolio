import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MdbScrollspyModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  exp = [
    {
      url: 'https://www.pangaeax.com/platform/login',
      title: 'Pangaeax',
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio et, culpa nisi aliquam minus libero, eius quidem amet',
      tech: ['angular', 'TypeScript', 'Scss', 'BootStrap'],
    },
    {
      url: 'https://samhita.org/',
      title: 'Samhitha',
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio et, culpa nisi aliquam minus libero, eius quidem amet',
      tech: ['angular', 'TypeScript', 'Scss', 'BootStrap'],
    },
  ];
  project = [
    {
      url: '/project/aot',
      title: 'Attack On Titan',
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio et, culpa nisi aliquam minus libero, eius quidem amet',
      tech: ['angular', 'TypeScript', 'Scss', 'Bootstrap'],
    },
    {
      url: '/project/aot',
      title: 'Attack On Titan',
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio et, culpa nisi aliquam minus libero, eius quidem amet',
      tech: ['angular', 'TypeScript', 'Scss', 'Bootstrap'],
    },
  ];
}
