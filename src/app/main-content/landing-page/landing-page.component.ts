import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { NavigationComponent } from "./navigation/navigation.component";



@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [NavigationComponent]
})
export class LandingPageComponent {

  constructor(private sharedService: SharedService) {}

  toggleValue(): void {
    this.sharedService.setData(!this.sharedService.getData$());
  }

}
