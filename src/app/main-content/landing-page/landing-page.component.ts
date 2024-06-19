import { Component } from '@angular/core';
import { NavigationComponent } from "./navigation/navigation.component";
import { TranslateModule } from '@ngx-translate/core';



@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [NavigationComponent, TranslateModule]
})
export class LandingPageComponent {
}
