import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  rate = 0;
  
  selectRate(event: Event) {
  const target = event.target as HTMLElement;
  const value = Number(target.textContent);
    if (!isNaN(value)) {
      this.rate = value;
    }
  }
}
