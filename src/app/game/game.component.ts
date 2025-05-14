import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit, OnDestroy {
  gameMessage: string = 'Complete the Sudoku puzzle to reveal a special message!';
  isComplete: boolean = false;
  timer: number = 0;
  timerInterval: any;
  isFindKimoGameVisible: boolean = false;
  kimoPosition = { x: 400, y: 300 }; // Centered position for 800x600 image
  clickRadius: number = 100; // Increased radius for easier finding

  constructor(private router: Router) {}

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timer++;
    }, 1000);
  }

  getTimeString(): string {
    const minutes = Math.floor(this.timer / 60);
    const seconds = this.timer % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  showFindKimoGame() {
    this.isFindKimoGameVisible = true;
    this.gameMessage = 'Find Kimo in the picture!';
  }

  checkKimoClick(event: MouseEvent | TouchEvent) {
    // Get the image element
    const image = event.target as HTMLImageElement;
    const rect = image.getBoundingClientRect();
    
    // Get coordinates based on event type
    let x: number, y: number;
    if (event instanceof TouchEvent) {
      x = event.touches[0].clientX - rect.left;
      y = event.touches[0].clientY - rect.top;
    } else {
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    }
    
    // Scale the coordinates to match the image's natural size
    const scaleX = image.naturalWidth / rect.width;
    const scaleY = image.naturalHeight / rect.height;
    
    const scaledX = x * scaleX;
    const scaledY = y * scaleY;
    
    // Calculate distance from click to Kimo's position
    const distance = Math.sqrt(
      Math.pow(scaledX - this.kimoPosition.x, 2) + 
      Math.pow(scaledY - this.kimoPosition.y, 2)
    );
    
    console.log('Click position:', { x: scaledX, y: scaledY });
    console.log('Kimo position:', this.kimoPosition);
    console.log('Distance:', distance);
    console.log('Click radius:', this.clickRadius);
    
    if (distance <= this.clickRadius) {
      this.isComplete = true;
      this.gameMessage = 'You found Kimo! 🎉';
      clearInterval(this.timerInterval);
    }
  }

  continueToQuiz() {
    this.router.navigate(['/quiz/1']);
  }
}
