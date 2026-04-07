import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  // Ye line miss ho gayi hogi, isse zaroor dalo
  isScrolled = false; 

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Jab scroll 50px se zyada hoga, tab true ho jayega
    this.isScrolled = window.scrollY > 50;
  }
}