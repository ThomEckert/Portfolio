import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LetsWorkTogetherComponent } from './lets-work-together/lets-work-together.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent, LetsWorkTogetherComponent, SkillSetComponent, MyWorkComponent, ContactComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
