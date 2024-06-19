import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };

  mailTest = false;

  thxMessage = false;

  post = {
    endPoint: 'https://thomas-eckert.net/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
            console.log(this.contactData);
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.thxMessage = true;
            this.contactData.checkbox = false;
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('Daten gesendet', this.contactData);
      this.thxMessage = true;
      this.contactData.checkbox = false;
      ngForm.resetForm();
    }
    this.contactData.checkbox = false;
  }
}
