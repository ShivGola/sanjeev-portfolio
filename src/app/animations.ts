import { trigger, transition, style, animate, query, stagger } from '@angular/animations';


// 'export' keyword hona compulsory hai
export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(40px)' }),
    animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

// 2. Stagger Animation (Project Cards ke liye - ek ke baad ek aayenge)
export const staggerItems = trigger('staggerItems', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(100px)' }),
      stagger('200ms', [
        animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);