import { Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MemoryLaneComponent } from './memory-lane/memory-lane.component';
import { QuizComponent } from './quiz/quiz.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { GameComponent } from './game/game.component';
import { FinalMessageComponent } from './final-message/final-message.component';

export const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // Default route
    { path: 'welcome', component: WelcomePageComponent },
    { path: 'memory-lane', component: MemoryLaneComponent },
    { path: 'quiz/:id', component: QuizComponent }, // Example of passing an ID for different quizzes
    { path: 'puzzle/:id', component: PuzzleComponent }, // Example for different puzzles
    { path: 'game/:id', component: GameComponent },     // Example for different games
    { path: 'final', component: FinalMessageComponent},
  ];