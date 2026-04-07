import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations'; // 1. Ye import zaroori hai

// 2. Animation ka logic (agar alag file mein hai toh wahan se import karo, varna yahan paste karo)
const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(40px)' }),
    animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
  animations: [fadeInUp] // 3. Ye sabse zaroori line hai!
})
export class Hero { }