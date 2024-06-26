import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../shared/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent{
 translate = inject(TranslationService);
  hiddenBarIsAktive = false;

  toggleHiddenBar() {
    this.hiddenBarIsAktive = !this.hiddenBarIsAktive
  }

 
  
}
