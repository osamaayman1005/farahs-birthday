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
      question: "Emta awl mara 2oltlek any b7bek?",
      options: ["Call", "Messenger Call", "Face to face", "Chat"],
      correctAnswer: 1,
      explanation: "Kan mafrod nnzl el yom da bs ana 3yet T_T"
    },
    {
      question: "Esm el mat3m ely aklna fe sea food bags l awl mara?",
      options: ["Clams and claws", "Shrimp nations", "Shrimp anatomy", "Bahary"],
      correctAnswer: 0,
      explanation: "kan fr3 arkan zayed"
    },
    {
      question: "meen el mo8any ely msh b5aly 7d ysh8alo fl 3arabya 8erek?",
      options: ["Tamer Hosny", "Wegz", "Shereen", "Amr Diab"],
      correctAnswer: 3,
      explanation: "M7dsh 8erek ynf3 y3ml kda"
    },
    {
      question: "Awl mara ageblek ward kan",
      options: ["Wrda 7amra f bouquet eswd", "Wrda 7amra f bouquet shafaf",
         "Wrda pink mn8er Bouquet", "Wrda pink f bouquet abyad"],
      correctAnswer: 0,
      explanation: "Yomha kont 3nd sherif we gtlek b chocolate we warda"
    },
    {
      question: "Meen a7la 2ot fl donya?",
      options: ["Kimoooo", "......", "......", "......",],
      correctAnswer: 0,
      explanation: "Meoooooow"
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
