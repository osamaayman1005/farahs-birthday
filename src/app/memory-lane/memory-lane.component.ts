import { NgFor, NgIf, DatePipe, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Memory {
  date: string;
  title: string;
  description: string;
  image?: string; // Optional image URL
  viewed?: boolean;
}

@Component({
  selector: 'app-memory-lane',
  imports: [NgIf, NgFor, DatePipe, SlicePipe],
  templateUrl: './memory-lane.component.html',
  styleUrl: './memory-lane.component.css'
})
export class MemoryLaneComponent {
  memories: Memory[] = [
    {
      date: '2023-08-15',
      title: 'Our First Date',
      description: 'I remember being so nervous but excited to meet you. That coffee shop holds a special place in my heart.',
      image: 'url/to/your/first-date-image.jpg',
      viewed: false
    },
    {
      date: '2023-12-24',
      title: 'Christmas Together',
      description: 'Our first Christmas together was magical. Decorating the tree and sharing stories felt so right.',
      image: 'url/to/your/christmas-image.jpg',
      viewed: false
    },
    {
      date: '2024-05-03',
      title: 'The Day We Adopted Kimo!',
      description: 'Bringing Kimo home was such a joyful moment. He quickly became a part of our family.',
      image: 'url/to/your/kimo-adoption-image.jpg',
      viewed: false
    },
    {
      date: '2024-11-10',
      title: 'That Amazing Trip',
      description: 'Exploring those ancient ruins with you was an unforgettable adventure. Remember that funny incident with the camel?',
      image: 'url/to/your/trip-image.jpg',
      viewed: false
    },
  ];
  selectedMemory: Memory | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showMemoryDetails(memory: Memory): void {
    this.selectedMemory = memory;
    memory.viewed = true;
  }

  closeMemoryDetails(): void {
    this.selectedMemory = null;
  }

  areAllMemoriesViewed(): boolean {
    return this.memories.every(memory => memory.viewed);
  }

  startGame(): void {
    this.router.navigate(['/game/1']);
  }
}
