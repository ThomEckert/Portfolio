import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
