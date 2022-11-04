import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  isGreaterOrEqualThanZero(): boolean {
    return this.count >= 0;
  }

  isLessOrEqualThanTen(): boolean{
    return this.count <= 10;
  }

  reset(): void {
    this.count = 0;
  }
}
