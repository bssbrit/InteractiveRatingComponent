import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { TitleComponent } from './title/title.component';
import { ScoresComponent } from './scores/scores.component';

@Component({
  selector: 'app-root',
  imports: [LogoComponent, TitleComponent, ScoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InteractiveRatingComponent';
}
