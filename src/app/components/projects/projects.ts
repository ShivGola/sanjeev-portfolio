// import { Component } from '@angular/core';
// import { staggerItems } from '../../animations'; // Jo file humne banayi thi

// @Component({
//   selector: 'app-projects',
//   templateUrl: './projects.html',
//   styleUrls: ['./projects.css'],
//   animations: [staggerItems]
// })
// export class ProjectsComponent {
//   projects = [
//     {
//       title: "Devil's AI Assistant",
//       desc: "AI-based chat application with OTP authentication and Firebase integration.",
//       tech: ['HTML5', 'CSS3', 'JS', 'Firebase'],
//       link: 'https://github.com/Shivigola'
//     },
//     {
//       title: "CareFinder",
//       desc: "Angular-based healthcare locator with Google Maps API integration.",
//       tech: ['Angular', 'TypeScript', 'Firebase'],
//       link: '#'
//     },
//     {
//       title: "Quiz Examination App",
//       desc: "Mobile app with real-time scoring and secure SQL/Firebase backend.",
//       tech: ['Java', 'XML', 'Firebase', 'SQL'],
//       link: '#'
//     },
//     {
//       title: "E-Commerce App",
//       desc: "Full-stack e-commerce solution with product management.",
//       tech: ['.NET MAUI', 'C#', 'SQL Server'],
//       link: '#'
//     }
//   ];
// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations'; // 1. Ye imports check karo

// 2. Stagger Animation logic (yahan copy-paste kar do)
const staggerItems = trigger('staggerItems', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(50px)' }),
      stagger('150ms', [
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  animations: [staggerItems] // 3. Ye sabse zaroori hai, iske bina error aayega
})
export class Projects {
  projects = [
  {
    title: "Devil's AI Assistant",
    desc: "An AI-powered tool for task automation using Python and real-time processing.",
    tech: ["Python", "Firebase", "NLP"] // Yeh alag-alag hone chahiye
  },
  {
    title: "CareFinder",
    desc: "Comprehensive healthcare platform to locate nearby medical facilities instantly.",
    tech: ["Angular", "Google Maps", "TypeScript"]
  },
  {
    title: "Quiz App",
    desc: "Mobile application for real-time quiz examinations with score tracking.",
    tech: ["Java", "Android", "Firebase"]
  }
];
}