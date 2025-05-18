import { Component } from '@angular/core';

@Component({
  selector: 'app-scores',
  imports: [],
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.css'
})
export class ScoresComponent {
  rates = [1, 2, 3, 4, 5];
 selectedRate: number | null = null;
 liClass = 'selectedRate';
  
  selectRate(event: Event) {
  const target = event.target as HTMLElement;
  const value = Number(target.textContent);
    if (!isNaN(value)) {
      this.selectedRate = value;
    }
    console.log(this.selectedRate);
  
  }
}
