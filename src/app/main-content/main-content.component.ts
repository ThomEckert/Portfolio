import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LetsWorkTogetherComponent } from './lets-work-together/lets-work-together.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent, LetsWorkTogetherComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
