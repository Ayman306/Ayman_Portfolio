import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MdbCollapseModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor() {}
  ngOnInit(): void {}
  screenWidth = window.innerWidth;
  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
