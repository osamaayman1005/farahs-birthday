import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  questions: Question[] = [
    {
      question: "What is the name of the main character in Tviria?",
      options: ["Tviria", "Tvirieli", "Tvirieli Tviria", "Tvirieli Tvirieli"],
      correctAnswer: 2,
      explanation: "The main character's full name is Tvirieli Tviria!"
    },
    {
      question: "What is Tviria's favorite food?",
      options: ["Khinkali", "Khachapuri", "Lobiani", "Mtsvadi"],
      correctAnswer: 0,
      explanation: "Tviria loves Khinkali more than anything!"
    },
    {
      question: "What is Tviria's catchphrase?",
      options: ["Gamarjoba!", "Nakhvamdis!", "Tviria!", "Sakartvelo!"],
      correctAnswer: 2,
      explanation: "Tviria often exclaims her own name as a catchphrase!"
    },
    {
      question: "What is Tviria's favorite color?",
      options: ["Red", "Blue", "Green", "Yellow"],
      correctAnswer: 0,
      explanation: "Tviria's favorite color is red, just like her dress!"
    },
    {
      question: "What does Tviria do when she's happy?",
      options: ["Dances", "Sings", "Jumps", "All of the above"],
      correctAnswer: 3,
      explanation: "Tviria expresses her happiness by dancing, singing, and jumping!"
    }
  ];

  currentQuestionIndex: number = 0;
  selectedAnswer: number | null = null;
  isCorrect: boolean | null = null;
  showExplanation: boolean = false;
  score: number = 0;
  quizComplete: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  selectAnswer(index: number) {
    if (this.selectedAnswer !== null) return; // Prevent multiple selections
    
    this.selectedAnswer = index;
    this.isCorrect = index === this.questions[this.currentQuestionIndex].correctAnswer;
    
    if (this.isCorrect) {
      this.score++;
    }
    
    this.showExplanation = true;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedAnswer = null;
      this.isCorrect = null;
      this.showExplanation = false;
    } else {
      this.quizComplete = true;
    }
  }

  continueToFinal() {
    this.router.navigate(['/final']);
  }
}
