import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-final',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="final-container">
      <h1>Happy Birthday, Farah! 🎉</h1>
      <div class="message">
        <p>You've completed all the challenges and found Kimo!</p>
        <p>Thank you for being such an amazing person in my life.</p>
        <p>Here's to many more adventures together! ❤️</p>
      </div>
    </div>
  `,
  styles: [`
    .final-container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 2rem;
      text-align: center;
      background: linear-gradient(135deg, #fff5f5 0%, #ffe3e3 100%);
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #ff4d4d;
      font-size: 2.5rem;
      margin-bottom: 2rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .message {
      font-size: 1.2rem;
      color: #444;
      line-height: 1.8;
    }

    .message p {
      margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
      .final-container {
        margin: 1rem;
        padding: 1rem;
      }

      h1 {
        font-size: 2rem;
      }

      .message {
        font-size: 1.1rem;
      }
    }
  `]
})
export class FinalComponent {} 