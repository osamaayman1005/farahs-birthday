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
      date: '2023-11-25',
      title: 'Our First Date',
      description: 'I remember being so nervous but excited to meet you. but when I saw you, I knew that you are the one.',
      image: 'assets/images/first-date.jpeg',
      viewed: false
    },
    {
      date: '2023-12-02',
      title: 'Our First outing as a couple',
      description: 'It was a strange feeling for me at first, but then i felt that it was right,  like it was exactly where I was meant to be.',
      image: 'assets/images/first-date-as-couple.jpeg',
      viewed: false
    },
    {
      date: '2023-12-29',
      title: 'Vibing at Ikea',
      description: 'Ikea is so special to me, because it made me imagine the future with you — building a life, piece by piece',
      image: 'assets/images/ikea.jpeg',
      viewed: false
    },
    {
      date: '2024-02-03',
      title: 'Egyptian National Museum',
      description: 'I never thought I will ever enjoy going to a museum, but you made it so fun.',
      image: 'assets/images/egyptian.jpeg',
      viewed: false
    },
    {
      date: '2024-04-26',
      title: 'Fat7a',
      description: 'I was so excited for this day, it was hard to arrange it, but finally we did it.',
      image: 'assets/images/fat7a.jpeg',
      viewed: false
    },
    {
      date: '2024-06-29',
      title: 'Our Engagement',
      description: 'I hate being under the spotlight, but that day, all I cared about was you. so I was so happy. also i choose this picture of us with kimo which tottaly happened and not photoshopped.',
      image: 'assets/images/5otoba.jpeg',
      viewed: false
    },
    {
      date: '2024-02-03',
      title: 'Sahel 2024',
      description: 'This was the first time I felt like I was part of your family. I could be myself and have fun with you.',
      image: 'assets/images/sahel.jpeg',
      viewed: false
    },
    {
      date: '2024-12-31',
      title: 'Christmas at your house',
      description: 'It was a fun night and we had this picture with our baby kimo.',
      image: 'assets/images/chrismas.jpeg',
      viewed: false
    },
    {
      date: '2025-04-19',
      title: 'Sham El Nseem at Alexandria - Greek Museum',
      description: 'Honestly, I wasn\'t sure about this day, I never had fun in Alexandria before, but you made it one of the best days of my live and i can\'t wait for the next time we go there. also the greek museum was so fun, And i would love to go there again with you.',
      image: 'assets/images/greek.jpeg', 
      viewed: false
    },
    {
      date: '2025-05-10',
      title: 'Osama\'s 27th Birthday - Go Karts',
      description: 'i never had anyone do this effort for me before, I am so grateful for you. I had so much fun with you. and I love the gift you got me ⌚. I enjoyed the go Karts adventure with you and you exceeded my expectations. you might be born to be a race car driver.',
      image: 'assets/images/gocarts.jpeg',
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
