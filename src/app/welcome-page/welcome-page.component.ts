import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  imports: [RouterLink  ],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
  constructor(private router: Router) {}

  continueToQuiz() {
    this.router.navigate(['/quiz/1']);
  }
}
